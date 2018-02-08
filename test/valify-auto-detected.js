
const be = require('bejs');
const Model = require('..');

describe('valify-auto-detected', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be ok', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            email: 'email',
            aBoolean: 'boolean',
            aNumber: 'number',
            aUndefined: 'undefined',
            aNull: 'null'
        }, {autoCast: true});

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Storm',
                email: 'test@test.net',
                role: 'admin',
                aBoolean: 'true',
                aNumber: '52',
                aUndefined: 'undefined',
                aNull: 'null'
            });

            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('should be failed', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            email: 'email',
            aBoolean: 'boolean',
            aNumber: 'number',
            aUndefined: 'undefined',
            aNull: 'null'
        }, {autoCast: false});

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Storm',
                email: 'test@test.net',
                role: 'admin',
                aBoolean: 'true',
                aNumber: '52',
                aUndefined: 'undefined',
                aNull: 'null'
            });

            done('error');
        } catch (e) {
            done();
        }
    });
});
