const be = require('bejs');
const Model = require('..');

describe('validate', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed email', function (done) {

        const userModel = new Model({
            email: {
                type: 'string',
                validate: {
                    email: true
                }
            }
        });

        try {
            userModel({
                email: 'red0'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'email not valid')
                done();
        }
    });

    it('should be return failed email, custom message', function (done) {

        const userModel = new Model({
            email: {
                type: 'string',
                validate: {
                    email: {
                        msg: 'email must be a valid email'
                    }
                }
            }
        });

        try {
            userModel({
                email: 'red0'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'email must be a valid email')
                done();
        }
    });

    it('should be return ok email', function (done) {

        const userModel = new Model({
            lastName: {
                type: 'string',
                validate: {
                    email: true
                }
            }
        });

        try {
            userModel({
                lastName: 'test@test.com'
            });
            done();
        } catch (e) {
            console.log(e.message);
            done(e.message);
        }
    });

    it('should be return failed min', function (done) {

        const userModel = new Model({
            eta: {
                type: 'int',
                validate: {
                    min: 10
                }
            }
        });

        try {
            userModel({
                eta: 9
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            if(e.message === 'the number must be greater than or equal to 10')
                done();
        }
    });

    it('should be return error, custom validator', function (done) {

        const userModel = new Model({
            lastName: {
                type: 'string',
                validate: {
                    myValidator(value) {
                        if (value !== 'hello')
                            throw new Error('string must be hello');
                    }
                }
            }
        });

        try {
            userModel({
                lastName: 'test@test.com'
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            if(e.message === 'string must be hello')
                done();
        }
    });


});