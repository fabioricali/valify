const ValidModelError = require('./error');
const Types = require('./types');

class ValidModel {

    constructor(model, opts = {}) {

        this.model = Object.assign({}, model);

        return (data) => {
            let type;

            if(Types.object(data))
                throw new ValidModelError('Data is required and must be an object');

            for (let field in this.model) {
                if (this.model.hasOwnProperty(field)) {

                    if (typeof this.model[field] === 'object') {
                        type = this.model[field].type;
                    } else {
                        type = this.model[field];
                    }

                    if (!ValidModel.typeExists(type))
                        throw new ValidModelError(`Unknown type: "${type}"`);

                    if (data.hasOwnProperty(field)) {
                        if (!Types[type](data[field])) {
                            throw new ValidModelError(`${field} expects ${type} but receives: ${data[field]}`);
                        }
                    }
                }
            }
        };
    }

    static typeExists(type) {
        return Types.hasOwnProperty(type);
    }

}

module.exports = (model, opts) => new ValidModel(model, opts);