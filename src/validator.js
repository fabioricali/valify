const be = require('bejs');
const is = require('./assertions');
const defaulty = require('defaulty');
const Flak = require('flak');

const defaultScheme = {
    required: false,
    fieldName: null,
    validations: []
};

class Validator {
    constructor() {
        this._emitter = new Flak();
    }

    /**
     * Adds listener to instance
     * @param eventName {string} event name
     * @param callback {Function} callback
     */
    on(eventName, callback) {
        this._emitter.on.call(this._emitter, eventName, callback);
    }

    check(value, scheme) {

        defaulty(scheme, defaultScheme);

        if (be.not.object(scheme)) {
            throw new Error('scheme must be an object');
        }
        if (be.undefined(scheme.validations)) {
            throw new Error('scheme.validations is required');
        }

        if (be.undefined(scheme) && scheme.required) {
            throw new Error('value is required');
        }

        let validates = [];
        let errors = [];

        scheme.validations.forEach(function (validation) {
            if (be.undefined(validation.type)) {
                throw new Error('validation type is required');
            }
            let result = is[validation.type](value);
            validates.push(result);
            if (!result) {
                errors.push(validation.message);
            }
        });

        let isValid = be.all.true(validates);

        if (isValid) {
            this._emitter.fire('valid');
        } else {
            this._emitter.fire('error', errors);
        }

        return isValid;
    }
}

module.exports = Validator;