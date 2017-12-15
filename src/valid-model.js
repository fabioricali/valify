const ValidModelError = require('./error');
const check = require('./check-types');
const extend = require('defaulty');

class ValidModel {

    constructor(model, opts = {}) {

        this.model = Object.assign({}, model);

        return (data) => {
            let type;

            if(!check.object(data))
                throw new ValidModelError('Data is required and must be an object');

            for (let field in this.model) {
                if (this.model.hasOwnProperty(field)) {

                    this.normalize(field);
                    type = this.model[field].type;

                    if (!ValidModel.typeExists(type))
                        throw new ValidModelError(`Unknown type: "${type}"`);

                    console.log(type, check[type](data[field]));
                    /*if (check['function'](data[field].convert)) {
                        console.log('fire convert');
                    }*/

                    if (data.hasOwnProperty(field) && !check[type](data[field]))
                        throw new ValidModelError(`${field} expects ${type} but receives: ${data[field]}`);
                }
            }
        };
    }

    isModel(field) {
        return typeof this.model[field] === 'object' && this.model[field].hasOwnProperty('type');
    }

    normalize(field) {

        if(!this.isModel(field)) {
            this.model[field] = {type: this.model[field]};
        }

        return extend(this.model[field], {
            type: null,
            default: null,
            convert: null
        })
    }

    static typeExists(type) {
        return check.hasOwnProperty(type);
    }

}

module.exports = (model, opts) => new ValidModel(model, opts);