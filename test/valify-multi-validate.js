const be = require('bejs');
const Model = require('..');

describe('valify-validate', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('string: should be return ok', function (done) {

        const userModel = new Model({
            firstName: {
                type: (value, data, be) => {
                    if (!be.string(value))
                        return 'must be a string';
                    if (value.length <= 5)
                        return 'must be 5 chars'
                }
            }
        });

        try {
            userModel({
                firstName: 'red0'
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            done();
        }
    });
});