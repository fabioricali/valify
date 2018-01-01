const ValifyError = require('./error');
const check = require('./check-types');
const types = require('./types');
const validator = require('./validator');
const locale = Object.assign({}, require('./locale'));
const extend = require('defaulty');
const format = require('string-template');
const be = require('bejs');
const deprecate = require('depreca');

/**
 * @class Valify
 */
class Valify {

    /**
     *
     * @param model
     * @param opts
     * @returns {*|Promise}
     */
    constructor(model, opts = {}) {

        this.opts = extend.copy(opts, {
            usePromise: false
        });

        this.model = Object.assign({}, model);

        /**
         * Errors list
         * @type {{last: string, fields: Array}}
         * @ignore
         */
        this.errors = {
            message: '',
            fields: []
        };

        this.path = [];

        this._valid_ = this.valid.bind(this);
        this._valid_.owner = this;

        return this._valid_;
    }

    /**
     * Add error to list
     * @param message
     * @param obj
     */
    addError(message, obj = {}) {

        obj.path = Object.assign([], this.path);

        if (obj.field !== undefined)
            obj.path.push(obj.field);

        if (obj.index !== undefined)
            obj.path.push(obj.index);

        obj.path = obj.path.join('.');

        message = format(message, obj);

        if (this.errors.message === '')
            this.errors.message = message;

        if (obj.field === undefined) return;

        this.errors.fields.push({
            path: obj.path,
            message,
            field: obj.field,
            type: this.model[obj.field].type
        });

        if (be.function(this.model[obj.field].onError)) {
            this.model[obj.field].onError.call(this, message);
        }
    }

    /**
     * Catch error
     * @param errors
     */
    catchError(errors) {
        if (this.errors.message === '') this.errors.message = errors.message;
        for (let i in errors.fields) {
            if (errors.fields.hasOwnProperty(i) && !this.errors.fields.includes(errors.fields[i]))
                this.errors.fields.push(errors.fields[i]);
        }
    }

    /**
     * Validation
     * @param data
     * @param nested
     * @returns {*|Promise}
     */
    valid(data, nested) {
        let type;

        if (nested) {
            this.path = Object.assign([], nested);
        }

        if (!be.object(data))
            this.addError(locale.DATA_REQUIRED);
        else {
            for (let field in this.model) {

                if (!this.model.hasOwnProperty(field))
                    continue;

                this.model[field] = this.normalize(field);
                type = this.model[field].type;

                // #1 detect short required string
                type = this.detectShortRequired(type, field);

                // #2 apply convert function
                this.applyConvert(field, data);

                // #3 check allow null
                if (this.checkAllowNull(field, data))
                    continue;

                // #4 check unknown type
                if (this.checkUnknownType(type, field))
                    continue;

                // #5 check required
                if (this.checkRequired(field, data))
                    continue;

                // #6 check type
                this.checkType(type, field, data);

                // #7 check empty
                this.checkAllowEmpty(field, data);

                // #8 validator
                this.checkValidator(field, data);
            }
        }

        if (this.opts.usePromise && !nested) {
            return new Promise((resolve, reject) => {
                if (this.errors.message !== '')
                    reject(this.errors);
                else
                    resolve(data);
            });
        } else {
            if (this.errors.message !== '') {
                //if(this.errors.fields.length <=3)
                throw new ValifyError(this.errors.message, this.errors.fields);
            }else
                return data;
        }
    }

    /**
     * Detect if string type has symbol "?" set required property to false
     * @param type
     * @param field
     * @returns {*}
     */
    detectShortRequired(type, field) {
        let sType;

        if (be.string(type)) {
            sType = type;
        } else if (be.array(type) && type.length === 1 && be.string(type[0])) {
            sType = type[0];
        }

        if (sType !== undefined && sType.endsWith('?')) {
            this.model[field].required = false;
            return sType.slice(0, -1);
        } else
            return type;
    }

    /**
     * Check allow empty
     * @param field
     * @param data
     * @private
     * @ignore
     */
    checkAllowEmpty(field, data) {
        if (!this.model[field].allowEmpty && be.empty(data[field])){
            this.addError(
                this.model[field].locale.FIELD_CANNOT_EMPTY || locale.FIELD_CANNOT_EMPTY, {field}
            );
        }
    }

    /**
     * Check allow null
     * @param field
     * @param data
     * @returns {boolean}
     * @private
     * @ignore
     */
    checkAllowNull(field, data) {
        return this.model[field].allowNull && data[field] === null;
    }

    /**
     * Check unknown type
     * @param type
     * @param field
     * @returns {boolean}
     * @private
     * @ignore
     */
    checkUnknownType(type, field) {
        if (!Valify.typeExists(type) && !be.function(type) && !be.array(type)) {
            this.addError(
                locale.UNKNOWN_TYPE, {type, field}
            );
            return true;
        }

        return false;
    }

    /**
     * Apply convert function
     * @param field
     * @param data
     * @private
     * @ignore
     */
    applyConvert(field, data) {
        if (be.function(this.model[field].convert))
            data[field] = this.model[field].convert.call(this, data[field], Object.assign({}, data));
    }

    /**
     * Check if is required
     * @param field
     * @param data
     * @returns {boolean}
     * @private
     * @ignore
     */
    checkRequired(field, data) {
        if (!data.hasOwnProperty(field)) {
            if (this.model[field].default === null && this.model[field].required) {
                this.addError(
                    this.model[field].locale.FIELD_REQUIRED || locale.FIELD_REQUIRED, {field}
                );
                return true;
            } else if (this.model[field].required === false) {
                return true;
            } else {
                data[field] = this.model[field].default;
            }
        }

        return false;
    }

    /**
     * Check over type
     * @param type
     * @param field
     * @param data
     * @param parent
     * @private
     * @ignore
     */
    checkType(type, field, data, parent) {

        let index;
        if (be.object(parent)) {
            index = parent.index;
        }

        if (be.string(type)) {
            try {
                if (!Valify.stringAsError(check[type](data[field], be))) {
                    if (be.object(parent)) {
                        type = parent.type;
                        field = parent.field;
                        data = parent.data;
                    }
                    this.addError(
                        this.model[field].locale.TYPE_FAIL || locale.TYPE_FAIL, {
                            field,
                            type,
                            dataField: JSON.stringify(data[field]),
                            index
                        }
                    );
                }
            } catch (errors) {
                this.addError(errors.message, {field, index});
            }
        } else if (be.function(type)) {
            if (Valify.isInstance(type)) {
                try {
                    let path = Object.assign([], this.path);
                    if(parent)
                        path.push(parent.field);
                    path.push(field);
                    type.call(this, data[field], path);
                } catch (errors) {
                    this.catchError(errors);
                }
            } else {
                try {

                    if (!Valify.stringAsError(type.call(this, data[field], Object.assign({}, data), be))) {
                        if (be.object(parent)) {
                            field = parent.field;
                            data = parent.data;
                        }
                        this.addError(
                            this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL, {
                                field,
                                dataField: JSON.stringify(data[field]),
                                index
                            }
                        );
                    }
                } catch (errors) {
                    if (be.object(parent)) {
                        field = parent.field;
                    }
                    this.addError(errors.message, {field, index});
                }
            }

        } else if (be.array(type)) {

            if (type.length === 1) {

                if (!be.array(data[field])) {
                    this.addError(
                        this.model[field].locale.TYPE_ARRAY_FAIL || locale.TYPE_ARRAY_FAIL, {
                            field,
                            type,
                            dataField: JSON.stringify(data[field]),
                            index
                        }
                    );
                } else {
                    for (let i in data[field]) {
                        if (data[field].hasOwnProperty(i)) {
                            this.checkType(type[0], i, data[field], {type, field, data, index: i});
                        }
                    }
                }

            } else {

                deprecate('multi-type function is deprecated, please use validators instead');

                for (let i in type) {
                    if (type.hasOwnProperty(i) && (be.object(type[i]) || be.function(type[i]))) {

                        if (be.undefined(type[i].fn)) {
                            type[i] = {
                                fn: type[i],
                                message: type[parseInt(i) + 1]
                            };
                        }

                        if (!be.string(type[i].message))
                            type[i].message = this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL;

                        if (!Valify.stringAsError(type[i].fn.call(this, data[field], be))) {
                            this.addError(
                                type[i].message, {
                                    field,
                                    dataField: JSON.stringify(data[field]),
                                    index
                                }
                            );
                        }
                    }
                }
            }
        }
    }

    /**
     * Check over validator
     * @param field
     * @param data
     * @private
     * @ignore
     */
    checkValidator(field, data) {
        if (!be.object(this.model[field].validate)) return;

        let validate = this.model[field].validate;

        for (let i in validate) {
            if (!validate.hasOwnProperty(i))
                continue;

            if (!be.function(validate[i])) {

                let args = (be.object(validate[i]) && validate[i].args)
                    ? validate[i].args
                    : validate[i];

                if (be.array(args)) {
                    args.unshift(data[field]);
                } else {
                    args = [data[field], args];
                }

                if (!validator[i].fn.apply(this, args)) {
                    let param = Valify.printArgs(args);
                    param['field'] = field;
                    this.addError(
                        validate[i].msg || validator[i].msg, param
                    );
                }
                // custom validator
            } else if (be.function(validate[i])) {
                try {
                    if (!Valify.stringAsError(validate[i].call(this, data[field], Object.assign({}, data), be))) {
                        this.addError(
                            this.model[field].locale.VALIDATOR_FAIL || locale.VALIDATOR_FAIL, {
                                field,
                                validator: i
                            }
                        );
                    }
                } catch (e) {
                    this.addError(
                        e.message, {field}
                    );
                }
            }
        }

    }

    /**
     * Checks if is a Valify model
     * @param field
     * @returns {boolean}
     */
    isModel(field) {
        return typeof this.model[field] === 'object' && this.model[field].hasOwnProperty('type');
    }

    /**
     * Normalize model field
     * @param field
     * @returns {*}
     */
    normalize(field) {

        if (!this.isModel(field)) {
            this.model[field] = {type: this.model[field]};
        }

        return extend(this.model[field], {
            type: null,
            required: true,
            default: null,
            convert: null,
            validate: null,
            onError: null,
            allowNull: null,
            allowEmpty: true,
            locale: {
                FIELD_REQUIRED: null,
                TYPE_FAIL: null,
                TYPE_ARRAY_FAIL: null,
                VALIDATOR_FAIL: null,
                FIELD_CANNOT_EMPTY: null
            }
        })
    }

    static stringAsError(value) {
        if (be.string(value)) {
            throw new Error(value);
        } else
            return value;
    }

    /**
     * Check if is nested model
     * @param type
     * @returns {boolean}
     */
    static isInstance(type) {
        return type.owner instanceof Valify;
    }

    /**
     * Checks if type exists
     * @param type
     * @returns {boolean}
     */
    static typeExists(type) {
        return check.hasOwnProperty(type);
    }

    /**
     * Adds custom type
     * @param name
     * @param fn
     */
    static addType(name, fn) {
        if (be.emptyString(name))
            throw new Error('Name cannot be empty');

        if (Valify.typeExists(name))
            throw new Error(`Type ${name} already exists`);

        if (!be.function(fn))
            throw new TypeError('fn must be a function');

        check[name] = fn.bind(this);
    }

    /**
     * Set locale
     * @param obj
     */
    static setLocale(obj) {
        for (let param in obj) {
            if (obj.hasOwnProperty(param)) {
                if (be.emptyString(obj[param]))
                    throw new Error('Description cannot be empty');
                locale[param] = obj[param];
            }
        }
    }

    /**
     * Returns printable arguments
     * @param args
     * @returns {*}
     */
    static printArgs(args) {
        for (let i in args) {
            if (!args.hasOwnProperty(i)) continue;
            args[i] = JSON.stringify(args[i]);
        }
        return args;
    }

}

module.exports = Valify;
module.exports.TYPES = types;
module.exports.LOCALE = locale;