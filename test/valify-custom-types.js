const be = require('bejs');
const Model = require('..');

describe('valify-custom-types', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('add type should be return error', function (done) {

        Model.addType('myType', (value, validation) => {
            return value === 'boom';
        });

        const userModel = new Model({
            firstName: 'string',
            lastName: 'myType'
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
            console.log(e.message);
            console.log(e.fields);
            if (e.message === 'lastName expects myType but receives: Ricali' && e.fields[0].field === 'lastName' && e.fields[0].message === e.message)
                done();
        });

    });

    it('add type should be return error, throw error', function (done) {

        Model.addType('myType2', (value, validation) => {
            if (value !== 'boom')
                throw new Error('it must be boom')
        });

        const userModel = new Model({
            firstName: 'string',
            lastName: 'myType2'
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
            if (e.message === 'it must be boom' && e.fields[0].message === 'it must be boom')
                done();
        });

    });
});