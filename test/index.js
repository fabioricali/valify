const be = require('bejs');
const Model = require('..');

describe('validate', function () {
    it('should be return error, unknown type', function (done) {

        const userModel = Model({
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

    it('should be return error, wrong type', function (done) {

        const userModel = Model({
            createdOn: {
                type: 'date',
                default: new Date(),
                convert: (me)=>{
                    console.log(me);
                }
            },
            firstName: 'string',
            lastName: 'string'
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

    it('should be return error, data is undefined', function (done) {

        const userModel = Model({
            firstName: 'string',
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        });

        try {
            userModel()
        } catch (e) {
            if (e.message === 'Data is required and must be an object')
                done();
        }
    });
});