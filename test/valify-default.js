const Model = require('..');

describe('valify-default', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return ok, overwrites required property', function (done) {

        const userModel = new Model({
            aNumber: 'int',
            lastName: {
                type: 'string',
                default: 'Mike',
                required: true
            }
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

    it('should be return ok, set undefined', function (done) {

        const userModel = new Model({
            aNumber: 'int',
            lastName: {
                type: 'string',
                default: 'Mike',
                required: true
            }
        },{
            overwriteUndefined: true
        });

        const a = ['hello'];

        try {
            userModel({
                aNumber: 24,
                lastName: a[1]
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });
});
