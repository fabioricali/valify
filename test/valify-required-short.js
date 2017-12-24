const Model = require('..');

describe('valify-array', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed', function (done) {

        const userModel = new Model({
            aNumber: 'int',
            lastName: 'string?'
        });

        try {
            userModel({
                aNumber: 24
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('should be return failed, with array', function (done) {

        const userModel = new Model({
            aNumber: 'int',
            lastName: ['string?']
        });

        try {
            userModel({
                aNumber: 24
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

});
