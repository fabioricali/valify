const Model = require('..');
const be = require('bejs');

describe('valify-path', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
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
            console.log(e.fields);
            if (be.equal(e.fields[0].path, 'lastName.0'))
                done();
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
            console.log(e.fields);
            if (be.equal(e.fields[0].path, 'lastName.2'))
                done();
        }
    });

    it('should be return failed, type as model', function (done) {

        const userModel = new Model({
            record: [new Model({
                firstName: 'string',
                lastName: 'string',
                email: {
                    type: 'email'
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
            if (be.equal(e.fields[0].path, 'record.1.email'))
                done();
        }
    });

    it('should be return failed, type as model, using property', function (done) {

        const userModel = new Model({
            record: {
                type: [
                    new Model({
                        firstName: 'string',
                        lastName: 'string',
                        email: {
                            type: 'email'
                        }
                    })
                ]
            }
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
            if (be.equal(e.fields[0].path, 'record.1.email'))
                done();
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
                            type: 'email'
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
            console.log(e.fields);
            if (be.equal(e.fields[0].path, 'record'))
                done();
        }
    });

    it('should be return false, custom validator to check empty array', function (done) {

        const userModel = new Model({
            record: {
                type: [
                    new Model({
                        firstName: 'string',
                        lastName: 'string',
                        email: {
                            type: 'email'
                        }
                    })
                ],
                allowEmpty: false
            }
        });

        try {
            userModel({
                record: []
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            if (be.equal(e.fields[0].path, 'record'))
                done();
        }
    });

    it('should be return failed, complex nested', function (done) {

        const userModel = new Model({
            record: [new Model({
                p0: new Model({
                    p1: new Model({
                        p2: [
                            new Model({
                                    p3: 'string'
                                }
                            )
                        ]
                    })
                })
            })]
        });

        try {
            userModel({
                record: [
                    {
                        p0: {
                            p1: {
                                p2: [
                                    {p3: 'hello'}
                                ]
                            }
                        }
                    },
                    {
                        p0: {
                            p1: {
                                p2: [
                                    {p3: 'world'},
                                    {p3: true}
                                ]
                            }
                        }
                    }
                ]
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            if (be.equal(e.fields[0].path, 'record.1.p0.p1.p2.1.p3'))
                done();
        }
    });

    it('should be return failed, validator and complex nested', function (done) {

        const userModel = new Model({
            record: [new Model({
                p0: new Model({
                    p1: new Model({
                        p2: [
                            new Model({
                                p3: {
                                    type: 'email'
                                }
                            })
                        ]
                    })
                })
            })]
        });

        try {
            userModel({
                record: [
                    {
                        p0: {
                            p1: {
                                p2: [
                                    {p3: 'tt@tt.com'}
                                ]
                            }
                        }
                    },
                    {
                        p0: {
                            p1: {
                                p2: [
                                    {p3: 'hello'},
                                    {p3: 'ciao'},
                                    {p3: 'world'}
                                ]
                            }
                        }
                    }
                ]
            });
            done('error');
        } catch (e) {
            console.log(e.message);
            console.log(e.fields);
            //console.log(e.fields[0].path);
            if (be.equal(e.fields[0].path, 'record.1.p0.p1.p2.0.p3'))
                done();
        }
    });
});