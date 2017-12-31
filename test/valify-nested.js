const Model = require('..');

describe('valify-nested', function () {
    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed, error in parent', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string'
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 4,
                record: {
                    id: 1,
                    name: 'boom'
                }
            });
            done('error');
        } catch (e) {
            console.log(e.message, e.fields);
            if (e.message === '"lastName" expects "string" but receives: 4')
                done();
        }
    });

    it('should be return failed, error in child', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string'
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Reds',
                record: {
                    id: 'ops',
                    name: 'boom'
                }
            });
            done('error');
        } catch (e) {
            console.log(e.message, e.fields);
            if (e.message === '"record.id" expects "int" but receives: "ops"')
                done();
        }
    });

    it('should be return failed, error in child of child', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string',
                other: new Model({
                    color: 'string'
                })
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Reds',
                record: {
                    id: 1,
                    name: 'boom',
                    other: {
                        color: 25
                    }
                }
            });
            done('error');
        } catch (e) {
            console.log(e.message, e.fields);
            if (e.message === '"record.other.color" expects "string" but receives: 25')
                done();
        }
    });

    it('promise, should be return failed, error in child of child', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string',
                other: new Model({
                    color: 'string'
                })
            })
        }, {usePromise: true});

        userModel({
            firstName: 'Mike',
            lastName: 'Reds',
            record: {
                id: 1,
                name: 'boom',
                other: {
                    color: 25
                }
            }
        }).then(() => done('error')).catch(e => {
            console.log(e.message);
            if (e.message === '"record.other.color" expects "string" but receives: 25')
                done();
        });
    });

    it('should be return failed, error in child of child, promise is not allowed in nested scenario', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string',
                other: new Model({
                    color: 'string'
                }, {usePromise: true}) //this will be ignored
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Reds',
                record: {
                    id: 1,
                    name: 'boom',
                    other: {
                        color: 25
                    }
                }
            });
            done('error');
        } catch (e) {
            console.log(e.message, e.fields);
            console.log(JSON.stringify(e.fields));
            if (e.message === '"record.other.color" expects "string" but receives: 25')
                done();
        }
    });

    it('should be return failed, error in child of child, check if is the first error', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string',
                other: new Model({
                    color: 'string'
                })
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: false,
                record: {
                    id: 'ahah',
                    name: 'boom',
                    other: {
                        color: 25
                    }
                }
            });
            done('error');
        } catch (e) {
            console.log(e.message, e.fields);
            console.log(JSON.stringify(e.fields));
            if (
                e.message === '"lastName" expects "string" but receives: false' &&
                e.fields[0].message === e.message &&
                e.fields[1].message === '"record.id" expects "int" but receives: "ahah"' &&
                e.fields[2].message === '"record.other.color" expects "string" but receives: 25'
            )
                done();
        }
    });

    it('should be return failed, error in child, validator', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: {
                    type: 'int',
                    validate: {
                        max: 10
                    }
                },
                name: 'string'
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Reds',
                record: {
                    id: 12,
                    name: 'boom'
                }
            });
            done('error');
        } catch (e) {
            console.log(e.message, e.fields);
            if (e.message === 'the number must be lesser than or equal to 10 instead it is 12')
                done();
        }
    });

    it('should be return ok', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            record: new Model({
                id: 'int',
                name: 'string'
            })
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 'Reds',
                record: {
                    id: 2,
                    name: 'boom'
                }
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });
});