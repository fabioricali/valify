const ValifyError = require('./error');
const check = require('./check-types');
const types = require('./types');
const locale = Object.assign({}, require('./locale'));
const extend = require('defaulty');
const format = require('string-template');
const validation = require('bejs');

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
            last: '',
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
        this.errors.last = message;
        if (field !== undefined) {
            this.errors.fields.push({
                field,
                message: message
            });

            if (typeof this.model[field].onError === 'function') {
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

        if (!check[types.OBJECT](data))
            this.addError(locale.DATA_REQUIRED);
        else
            for (let field in this.model) {
                if (this.model.hasOwnProperty(field)) {

                    this.model[field] = this.normalize(field);
                    type = this.model[field].type;

                    if (!Valify.typeExists(type) && !check[types.FUNCTION](type) && !check[types.ARRAY](type)) {
                        this.addError(
                            format(locale.UNKNOWN_TYPE, {type}),
                            field
                        );
                        continue;
                    }

                    if (data.hasOwnProperty(field)) {

                        if (check[types.STRING](type) && !check[type](data[field], validation)) {
                            this.addError(
                                format(this.model[field].locale.TYPE_FAIL || locale.TYPE_FAIL, {
                                    field,
                                    type,
                                    dataField: data[field]
                                }),
                                field
                            );
                        } else if (check[types.FUNCTION](type) && !type.call(this, data[field], validation)) {
                            this.addError(
                                format(this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL, {
                                    field,
                                    dataField: data[field]
                                }),
                                field
                            );
                        } else if (check[types.ARRAY](type)) {
                            for (let i in type) {
                                if (type.hasOwnProperty(i) && (check[types.OBJECT](type[i]) || check[types.FUNCTION](type[i]))) {

                                    if (typeof type[i].fn === 'undefined') {
                                        type[i] = {
                                            fn: type[i],
                                            message: type[parseInt(i) + 1]
                                        };
                                    }

                                    if(!check[types.STRING](type[i].message))
                                        type[i].message = this.model[field].locale.TYPE_FAIL || locale.TYPE_FUNCTION_FAIL;

                                    if (!type[i].fn.call(this, data[field], validation)) {
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

                    } else if (this.model[field].default === null && this.model[field].required) {
                        this.addError(
                            format(this.model[field].locale.FIELD_REQUIRED || locale.FIELD_REQUIRED, {field}),
                            field
                        );
                    } else {
                        data[field] = this.model[field].default;
                    }

                    if (check[types.FUNCTION](this.model[field].convert)) {
                        data[field] = this.model[field].convert.call(this, data[field], Object.assign({}, data));
                    }

                }
            }

        if (this.opts.usePromise) {

            if (this.errors.last !== '')
                return Promise.reject(this.errors);
            else
                return Promise.resolve(data);

        } else {
            if (this.errors.last !== '')
                throw new ValifyError(this.errors.last);
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
            required: null,
            default: null,
            convert: null,
            onError: null,
            locale: {
                FIELD_REQUIRED: null,
                TYPE_FAIL: null
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
        if (Valify.typeExists(name))
            throw new Error(`Type ${name} already exists`);

        if (typeof fn !== 'function')
            throw new TypeError('fn must be a function');

        check[name] = fn.bind(this);
    }

    /**
     * Set locale
     * @param obj
     */
    static setLocale(obj) {
        for (let param in obj) {
            if (obj.hasOwnProperty(param))
                locale[param] = obj[param];
        }
    }

}

module.exports = Valify;
module.exports.TYPES = types;
module.exports.LOCALE = locale;