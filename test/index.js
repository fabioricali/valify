const be = require('bejs');
const Validator = require('..');

describe('validate', function () {
    describe('alphanumeric', function () {
        it('should be return true', function () {
            const validator = new Validator();
            let scheme = {
                required: true,
                validations: [
                    {
                        type: 'alphanumeric',
                        message: 'must be a valid password'
                    }
                ]
            };
            let result = validator.check('fabioricali123', scheme);
            be.err.true(result);
        });
        it('more validations, should be return true', function () {
            const validator = new Validator();
            let scheme = {
                required: true,
                validations: [
                    {
                        type: 'alphanumeric',
                        message: 'must be a valid password'
                    },
                    {
                        type: 'contains',
                        argument: 'ricali',
                        message: 'must contain "ricali"'
                    }
                ]
            };
            let result = validator.check('fabioricali123', scheme);
            be.err.true(result);
        });
        it('should be return false', function (done) {
            const validator = new Validator();

            validator.on('error', function (errors) {
                console.log(errors);
                done();
            });

            let scheme = {
                required: true,
                fieldName: 'email',
                validations: [
                    {
                        type: 'alphanumeric',
                        message: 'must be a valid password'
                    }
                ]
            };
            validator.check('fabio@rica', scheme);
        });
    });
    describe('email', function () {
        it('should be return true', function () {
            const validator = new Validator();
            let scheme = {
                required: true,
                fieldName: 'email',
                validations: [
                    {
                        type: 'email',
                        message: 'must be a valid email'
                    }
                ]
            };
            let result = validator.check('fabio@rica.li', scheme);
            be.err.true(result);
        });
        it('should be return false', function (done) {
            const validator = new Validator();

            validator.on('error', function (errors) {
                console.log(errors);
                done();
            });

            let scheme = {
                required: true,
                fieldName: 'email',
                validations: [
                    {
                        type: 'email',
                        message: 'must be a valid email'
                    }
                ]
            };
            validator.check('fabio@rica', scheme);
        });
    })
});