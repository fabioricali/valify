const Model = require('..');

describe('valify-array', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed', function (done) {

        const userModel = new Model({
            aNumber: 'int',
            lastName: ['string']
        });

        try {
            userModel({
                lastName: 'Red'
            })
        } catch (e) {
            console.log(e.fields);
            console.log(e.message);
            if (
                e.message === 'aNumber expects int but receives: null' &&
                e.fields.length === 2 &&
                e.fields[1].message === 'lastName expects array of string but receives: "Red"'
            )
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

    it('should be return failed, type as function', function (done) {

        const userModel = new Model({
            lastName: [value => value === 'Gray']
        });

        try {
            userModel({
                lastName: ['Red']
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'lastName receives: ["Red"]')
                done();
        }
    });

    it('should be return failed, type as function and throw an error', function (done) {

        const userModel = new Model({
            lastName: [value => {
                if (value !== 'Gray')
                    throw new Error('value must be Gray');
            }]
        });

        try {
            userModel({
                lastName: ['Red']
            })
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            if (e.message === 'value must be Gray' && e.fields[0].message === 'value must be Gray' && e.fields[0].field === 'lastName')
                done();
        }
    });

    it('should be return ok, type as function', function (done) {

        const userModel = new Model({
            lastName: [value => ['Red', 'Gray'].includes(value)]
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
            if (e.message === 'lastName expects string but receives: ["Red","Gray",2]')
                done();
        }
    });

    it('should be return failed, type as model', function (done) {

        const userModel = new Model({
            record: [new Model({
                firstName: 'string',
                lastName: 'string',
                email: {
                    type: 'string',
                    validate: {
                        email: true
                    }
                }
            })]
        });

        try {
            userModel({
                record: [
                    {
                        firstName: 'Mike',
                        lastName: 'Ricali',
                        email: 'mike.ricali@gmail.com'
                    },
                    {
                        firstName: 'John',
                        lastName: 'McCain',
                        email: 'gmail.com'
                    }
                ]
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            if (e.message === '"gmail.com" is a not valid email' && e.fields[0].field === 'email' && e.fields[0].message === e.message)
                done();
        }
    });

    it('should be return ok, type as model', function (done) {

        const userModel = new Model({
            record: [new Model({
                firstName: 'string',
                lastName: 'string',
                email: {
                    type: 'string',
                    validate: {
                        email: true
                    }
                }
            })]
        });

        try {
            userModel({
                record: [
                    {
                        firstName: 'Mike',
                        lastName: 'Ricali',
                        email: 'mike.ricali@gmail.com'
                    },
                    {
                        firstName: 'John',
                        lastName: 'McCain',
                        email: 'john.m@gmail.com'
                    }
                ]
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('should be return ok, empty model', function (done) {

        const userModel = new Model({
            record: [new Model({
                firstName: 'string',
                lastName: 'string',
                email: {
                    type: 'string',
                    validate: {
                        email: true
                    }
                }
            })]
        });

        try {
            userModel({
                record: []
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('should be return false, empty model and required true', function (done) {

        const userModel = new Model({
            record: {
                type: [
                    new Model({
                        firstName: 'string',
                        lastName: 'string',
                        email: {
                            type: 'string',
                            validate: {
                                email: true
                            }
                        }
                    })
                ],
                required: true
            }
        });

        try {
            userModel({});
            done('error');
        } catch (e) {
            console.log(e.message);
            if(e.message === 'record is required')
                done();
        }
    });

    it('should be return failed, different type', function (done) {

        const userModel = new Model({
            record: [new Model({
                firstName: 'string',
                lastName: 'string',
                email: {
                    type: 'string',
                    validate: {
                        email: true
                    }
                }
            })]
        });

        try {
            userModel({
                record: null
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            if (e.message === 'record expects array of function () { [native code] } but receives: null')
                done();
        }
    });
});
