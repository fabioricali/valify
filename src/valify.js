const ValifyError = require('./error');
const check = require('./check-types');
const extend = require('defaulty');

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

        if (!check.object(data))
            this.addError('Data is required and must be an object');
        else
            for (let field in this.model) {
                if (this.model.hasOwnProperty(field)) {

                    this.normalize(field);
                    type = this.model[field].type;

                    if (!Valify.typeExists(type)) {
                        this.addError(`Unknown type: "${type}"`, field);
                        continue;
                    }

                    if (data.hasOwnProperty(field)) {
                        if (!check[type](data[field]))
                            this.addError(`${field} expects ${type} but receives: ${data[field]}`, field);
                    } else if (this.model[field].default === null && this.model[field].required) {
                        this.addError(`${field} is required`, field);
                    } else {
                        data[field] = this.model[field].default;
                    }

                    if (typeof this.model[field].convert === 'function') {
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
            onError: null
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
        if(Valify.typeExists(name))
            throw new Error(`Type ${name} already exists`);

        if(typeof fn !== 'function')
            throw new TypeError('fn must be a function');

        check[name] = fn.bind(this);
    }

}

module.exports = Valify;
module.exports.TYPES = check;