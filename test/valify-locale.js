const Model = require('..');

describe('validate locale', function () {

    beforeEach('should be change', function () {
        Model.setLocale({
            UNKNOWN_TYPE: 'unknown bim bum',
            TYPE_FAIL: 'this type has failed',
            TYPE_FUNCTION_FAIL: 'this function type has failed',
            FIELD_REQUIRED: 'is required',
            DATA_REQUIRED: 'Data is required'
        });
    });

    it('should be return error, unknown type', function (done) {

        const userModel = new Model({
            lastName: 'footype'
        });

        try {
            userModel({
                lastName: 'red'
            })
        } catch (e) {
            if (e.message === 'unknown bim bum')
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
            if (e.message === 'this type has failed')
                done();
        }
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
            if (e.message === 'Data is required')
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
            if (e.message === 'is required')
                done();
        }
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
            if(e.last === 'this type has failed')
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
                e.last === 'is required' &&
                e.fields[0].field === 'firstName' &&
                e.fields[0].message === e.last
            )
                done();

        })

    });

});