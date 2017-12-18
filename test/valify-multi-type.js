const be = require('bejs');
const Model = require('..');

describe('validate multi type', function () {

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
                lastName: 'red'
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
                        fn: value =>{ return true },
                        message: 'failed type 1'
                    },
                    {
                        fn: value =>{ return false },
                        message: 'failed type 2'
                    }
                ]
            }

        });

        try {
            userModel({
                lastName: 'red'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'failed type 2')
                done();
        }
    });

});