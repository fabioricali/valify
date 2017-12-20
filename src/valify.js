const ValifyError = require('./error');
const check = require('./check-types');
const types = require('./types');
const validator = require('./validator');
const locale = Object.assign({}, require('./locale'));
const extend = require('defaulty');
const format = require('string-template');
const be = require('bejs');

/**
 * @class Valify
 */
class Valify {

    /**
     *
     * @param model
     * @param opts
     * @returns {any}
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

        return this.valid.bind(this);
    }

    /**
     * Add error to list
     * @param message
     * @param field
     */
    addError(message, field) {
        if(this.errors.message === '')
            this.errors.message = message;
        if (field !== undefined) {
            this.errors.fields.push({
                field,
                message
            });

            if (be.function(this.model[field].onError)) {
                this.model[field].onError.call(this, message);
            }
        }
    }

    /**
     * Validation
     * @param data
     * @returns {*}
     */
    valid(data) {
        let type;

        if (!be.object(data))
            this.addError(locale.DATA_REQUIRED);
        else
            for (let field in this.model) {
                if (this.model.hasOwnProperty(field)) {

                    this.model[field] = this.normalize(field);
                    type = this.model[field].type;

                    if (this.model[field].allowNull && data[field] === null)
                        continue;

                    if (!Valify.typeExists(type) && !be.function(type) && !be.array(type)) {
                        this.addError(
                            format(locale.UNKNOWN_TYPE, {type}),
                            field
                        );
                        continue;
                    }

                    if (data.hasOwnProperty(field)) {

                        if (be.string(type) && !check[type](data[field], be)) {
                            this.addError(
                                format(this.model[field].locale.TYPE_FAIL || locale.TYPE_FAIL, {
                                    field,
                                    type,
                                    dataField: data[field]
                                }),
                                field
                            );
                        } else if (be.function(type) && !type.call(this, data[field], be)) {
                            this.addError(
                                format(this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL, {
                                    field,
                                    dataField: data[field]
                                }),
                                field
                            );
                        } else if (be.array(type)) {
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

                                    if (!type[i].fn.call(this, data[field], be)) {
                                        this.addError(
                                            format(type[i].message, {
                                                field,
                                                dataField: data[field]
                                            }),
                                            field
                                        );
                                    }
                                }
                            }
                        }

                        if(be.object(this.model[field].validate)) {
                            let validate = this.model[field].validate;
                            for (let i in validate) {

                                if (validate.hasOwnProperty(i)){
                                    if (!be.function(validate[i]) && !validator[i].fn.call(this, data[field])) {
                                        this.addError(
                                            format(validate[i].msg || validator[i].msg, {field}),
                                            field
                                        );
                                        // custom validator
                                    } else if (be.function(validate[i])){
                                        try {
                                            validate[i].call(this, data[field], be);
                                        } catch (e) {
                                            this.addError(
                                                format(e.message),
                                                field
                                            );
                                        }
                                    }
                                }
                            }
                        }

                    } else if (this.model[field].default === null && this.model[field].required) {
                        this.addError(
                            format(this.model[field].locale.FIELD_REQUIRED || locale.FIELD_REQUIRED, {field}),
                            field
                        );
                    } else {
                        data[field] = this.model[field].default;
                    }

                    if (be.function(this.model[field].convert)) {
                        data[field] = this.model[field].convert.call(this, data[field], Object.assign({}, data));
                    }

                }
            }

        if (this.opts.usePromise) {
            if (this.errors.message !== '')
                return Promise.reject(this.errors);
            else
                return Promise.resolve(data);
        } else {
            if (this.errors.message !== '')
                throw new ValifyError(this.errors.message, this.errors.fields);
            else
                return data;
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
            required: false,
            default: null,
            convert: null,
            validate: null,
            onError: null,
            allowNull: false,
            locale: {
                FIELD_REQUIRED: null,
                TYPE_FAIL: null,
                EMAIL_FAIL: null
            }
        })
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

}

module.exports = Valify;
module.exports.TYPES = types;
module.exports.LOCALE = locale;