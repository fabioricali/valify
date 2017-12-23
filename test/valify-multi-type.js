 const be = require('bejs');
const Model = require('..');

describe('valify-multi-type', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed type 1', function (done) {

        const userModel = new Model({
            lastName: [
                {
                    fn: value => false,
                    message: 'failed type 1'
                }
            ]
        });

        try {
            userModel({
                lastName: 'red0'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'failed type 1')
                done();
        }
    });

    it('should be return failed type 2', function (done) {

        const userModel = new Model({
            lastName: {
                type: [
                    {
                        fn: value => true,
                        message: 'failed type 1'
                    },
                    {
                        fn: value => false,
                        message: 'failed type 2'
                    }
                ]
            }

        });

        try {
            userModel({
                lastName: 'red5'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'failed type 2')
                done();
        }
    });

    it('should be return failed type 3, test passing in array', function (done) {

        const userModel = new Model({
            lastName: {
                type: [
                    value => value === 'red', 'string must be to red color',
                    value => value.length === 4, 'string must be length 4 chars'
                ]
            }

        });

        try {
            userModel({
                lastName: 'red'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'string must be length 4 chars')
                done();
        }
    });

    it('should be return "lastName receives: red", test passing in array, forget message', function (done) {

        const userModel = new Model({
            lastName: {
                type: [
                    value => value.length === 4,
                    value => value === 'red', 'string must be to red color'
                ]
            }

        });

        try {
            userModel({
                lastName: 'red'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'lastName receives: red')
                done();
        }
    });

    it('should be return error, test passing in array and using bejs validator', function (done) {

        const userModel = new Model({
            lastName: {
                type: [
                    (value, validation) => validation.camelCase(value),
                    'string must be in camelCase format'
                ]
            }

        });

        try {
            userModel({
                lastName: 'red'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'string must be in camelCase format')
                done();
        }
    });
});