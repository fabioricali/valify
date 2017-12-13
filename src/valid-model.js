const ValidModelError = require('./error');
const checks = require('./check-types');

class ValidModel {

    constructor(model, opts = {}) {

        this.model = Object.assign({}, model);

        return (data) => {
            let type;

            if(checks.object(data))
                throw new ValidModelError('Data is required and must be an object');

            for (let field in this.model) {
                if (this.model.hasOwnProperty(field)) {

                    if (typeof this.model[field] === 'object') {

                        if(!this.model[field].hasOwnProperty('type'))
                            throw new ValidModelError('Type property not found');

                        type = this.model[field].type;
                    } else {
                        type = this.model[field];
                    }

                    if (!ValidModel.typeExists(type))
                        throw new ValidModelError(`Unknown type: "${type}"`);

                    if (data.hasOwnProperty(field) && !checks[type](data[field])) {
                        throw new ValidModelError(`${field} expects ${type} but receives: ${data[field]}`);
                    }
                }
            }
        };
    }

    static typeExists(type) {
        return checks.hasOwnProperty(type);
    }

}

module.exports = (model, opts) => new ValidModel(model, opts);