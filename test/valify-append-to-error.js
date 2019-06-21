
const be = require('bejs');
const Model = require('..');

describe('valify-append-to-error', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            email: 'email'
        }, {
            appendToError: {
                status: 400,
                expose: true
            }
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Storm',
            })
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            if (e.status === 400 && e.expose)
                done();
        }
    });

});
