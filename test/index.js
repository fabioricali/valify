const be = require('bejs');
const Model = require('..');

describe('validate', function () {
    it('should be return error, unknown type', function (done) {

        const userModel = new Model({
            lastName: 'footype'
        });

        try {
            userModel({
                lastName: 'red'
            })
        } catch (e) {
            if (e.message === 'Unknown type: "footype"')
                done();
        }
    });

    it('should be return ok, passing a function such type', function (done) {

        const userModel = new Model({
            lastName: (value)=>{
                return value === 'red';
            }
        });

        try {
            userModel({
                lastName: 'red'
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });

    it('should be return error, passing a function such type', function (done) {

        const userModel = new Model({
            lastName: (value)=>{
                return value === 'gray';
            }
        });

        try {
            userModel({
                lastName: 'red'
            });
            done('error');
        } catch (e) {
            done();
        }
    });

    it('should be return error, wrong type', function (done) {

        const userModel = new Model({
            createdOn: {
                type: 'date',
                default: new Date(),
                convert: (data) => {
                    console.log('arg', data);
                }
            },
            firstName: Model.TYPES.STRING,
            lastName: Model.TYPES.STRING
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 525
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'lastName expects string but receives: 525')
                done();
        }
    });

    it('should be return ok, done from callback convert', function (done) {

        const userModel = new Model({
            createdOn: {
                type: 'date',
                default: new Date(),
                convert: (value) => {
                    done();
                    console.log('arg', value);
                }
            },
            firstName: 'string',
            lastName: 'string'
        });

        userModel({
            firstName: 'Mike',
            lastName: 525
        });

    });

    it('should be return converted value', function (done) {

        const userModel = new Model({
            createdOn: {
                type: 'date',
                convert: (value) => {
                    console.log(value);
                    return 10;
                }
            },
            firstName: 'string',
            lastName: 'string'
        });

        let data = {
            firstName: 'Mike',
            lastName: 'Ricali',
            createdOn: new Date()
        };

        userModel(data);

        if(data.createdOn === 10)
            done();

    });

    it('should be return ok, calling done by onError callback', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: {
                type: 'string',
                onError: (message) => {
                    console.log(message);
                    done();
                }
            }
        });

        let data = {
            firstName: 'Mike',
            lastName: 525
        };

        userModel(data);

    });

    it('should be return error, data is undefined', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        });

        try {
            console.log(userModel())
        } catch (e) {
            console.log(e.message);
            if (e.message === 'Data is required and must be an object')
                done();
        }
    });

    it('should be return error, firstName is required', function (done) {

        const userModel = new Model({
            firstName: {
                type: 'string',
                required: true
            },
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        });

        try {
            userModel({
                lastName: 'Ricali'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'firstName is required')
                done();
        }
    });

    it('should be return ok', function () {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        });

        const result = userModel({
            firstName: 'Mike',
            lastName: 'Ricali'
        });

        console.log(result);
    });

    it('should be return ok, using promise', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        }, {
            usePromise: true
        });

        userModel({
            firstName: 'Mike',
            lastName: 'Ricali'
        }).then((data) => {
            console.log(data);
            done();
        });

    });

    it('should be return the equal object, using promise', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: 'string'
        }, {
            usePromise: true
        });

        const data = {
            firstName: 'Mike',
            lastName: 'Ricali',
            address: 'First street'
        };

        userModel(data).then((result) => {
            console.log(result);
            be.err(done).equal(data, result);
        });

    });

    it('should be return error, add custom type', function (done) {

        Model.addType('myCustom', value => {
            console.log(value);
            return value === 'boom';
        });

        const userModel = new Model({
            firstName: 'string',
            lastName: 'myCustom'
        }, {
            usePromise: true
        });

        const data = {
            firstName: 'Mike',
            lastName: 'Ricali',
            address: 'First street'
        };

        userModel(data).then((result) => {
            console.log(result);
            done('error')
        }).catch(e => {
            console.log(e);
            if(e.last === 'lastName expects myCustom but receives: Ricali')
            done();
        });

    });

    it('should be return error, firstName is required, using promise', function (done) {

        const userModel = new Model({
            firstName: {
                type: 'string',
                required: true
            },
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        }, {
            usePromise: true
        });

        userModel({
            lastName: 'Ricali'
        }).then(() => {
            done('error');
        }).catch(e => {
            console.log(e);
            if (
                e.last === 'firstName is required' &&
                e.fields[0].field === 'firstName' &&
                e.fields[0].message === e.last
            )
                done();

        })

    });

});