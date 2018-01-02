
const be = require('bejs');
const Model = require('..');

describe('valify-unknown-detected', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            email: 'email'
        }, {detectUnknown: true});

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Storm',
                email: 'test@test.net',
                role: 'admin',
                age: 26,
            })
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            if (e.message === 'Unknown fields were detected: role, age')
                done();
        }
    });

    it('should be return ok', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            email: 'email'
        }, {detectUnknown: false});

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Storm',
                email: 'test@test.net',
                role: 'admin',
                age: 26,
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

});
