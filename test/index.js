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
        }catch (e) {
            done();
        }
    });

    it('should be return error, wrong type', function (done) {

        const userModel = Model({
            firstName: 'string',
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        });

        try {
            userModel({
                firstName: 'Mike',
                lastName: 525
            })
        }catch (e) {
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
        }catch (e) {
            done();
        }
    });
});