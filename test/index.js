const be = require('bejs');
const Model = require('..');

describe('validate', function () {
    it('should be ok', function () {

        const userModel = Model({
            firstName: 'string',
            lastName: 'string',
            createdOn: {
                type: 'date',
                default: new Date()
            }
        });

        userModel({
            firstName: 'Mike',
            lastName: 'Red'
        })
    })
});