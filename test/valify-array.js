const Model = require('..');

describe('valify-array', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed', function (done) {

        const userModel = new Model({
            lastName: ['string']
        });

        try {
            userModel({
                lastName: 'Red'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'lastName expects array of  but receives: Red')
                done();
        }
    });

    it('should be return ok', function (done) {

        const userModel = new Model({
            lastName: ['string']
        });

        try {
            userModel({
                lastName: ['Red', 'Gray']
            });
            done();
        } catch (e) {
            console.log(e);
            done(e.message);
        }
    });

    it('should be return failed, wrong item', function (done) {

        const userModel = new Model({
            lastName: ['string']
        });

        try {
            userModel({
                lastName: ['Red', 'Gray', 2]
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            if(e.message === 'lastName expects string but receives: Red,Gray,2')
                done();
        }
    });
});
