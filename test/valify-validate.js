const be = require('bejs');
const Model = require('..');

describe('validator', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('email: should be return failed', function (done) {

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
            if (e.message === 'red0 is a not valid email')
                done();
        }
    });

    it('email: should be return failed, custom message', function (done) {

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

    it('email: should be return ok', function (done) {

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

    it('min: should be return failed', function (done) {

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
            if(e.message === 'the number must be greater than or equal to 10 instead it is 9')
                done();
        }
    });

    it('min: should be return ok', function (done) {

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
                eta: 11
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('max: should be return failed', function (done) {

        const userModel = new Model({
            eta: {
                type: 'int',
                validate: {
                    max: 10
                }
            }
        });

        try {
            userModel({
                eta: 11
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            if(e.message === 'the number must be lesser than or equal to 10 instead it is 11')
                done();
        }
    });

    it('max: should be return ok', function (done) {

        const userModel = new Model({
            eta: {
                type: 'int',
                validate: {
                    max: 10
                }
            }
        });

        try {
            userModel({
                eta: 9
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('url: should be return failed', function (done) {

        const userModel = new Model({
            url: {
                type: 'string',
                validate: {
                    url: true
                }
            }
        });

        try {
            userModel({
                url: 'hello'
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            if(e.message === 'hello is a not valid url')
                done();
        }
    });

    it('custom validator: should be return error', function (done) {

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