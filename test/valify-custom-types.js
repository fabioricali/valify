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
            if (e.message === '"lastName" expects "myType" type but receives: "Ricali"' && e.fields[0].field === 'lastName' && e.fields[0].message === e.message)
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

    it('add type should be return error such string', function (done) {

        Model.addType('myType3', (value, validation) => {
            if (value !== 'boom')
                return 'it must be boom';
        });

        const userModel = new Model({
            firstName: 'string',
            lastName: 'myType3'
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

    it('add multiple types', function () {
        Model.addTypes([
            {
                name: 'myType10',
                fn: value => value === 'hello'
            },
            {
                name: 'myType20',
                fn: value => value === 'world'
            }
        ]);

        be.err.true(Model.typeExists('myType10'));
        be.err.true(Model.typeExists('myType20'));
    });

    it('add multiple types, wrong types object, should be return an error', function (done) {
        try {
            Model.addTypes(() => true);
        } catch (e) {
            if (e.message === 'types must be an array')
                done();
        }
    });

    it('add multiple types, wrong name type, should be return an error', function (done) {
        try {
            Model.addTypes([
                {
                }
            ]);
        } catch (e) {
            console.log(e.message);
            if (e.message === 'name must be a string')
                done();
        }
    });

    it('add multiple types, wrong fn type, should be return an error', function (done) {
        try {
            Model.addTypes([
                {
                    name: 'myTypee'
                }
            ]);
        } catch (e) {
            console.log(e.message);
            if (e.message === 'fn must be a function')
                done();
        }
    });
});