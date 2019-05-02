
const be = require('bejs');
const Model = require('..');

describe('valify-promise-types', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed', function (done) {

        const userModel = new Model({
            firstName: (value) => new Promise((resolve, reject) => {
                reject('error verification')
            }),
            lastName: 'string',
            email: 'email'
        }, {usePromise: true});

        //try {
            userModel({
                firstName: 'Mike',
                lastName: 'Storm',
                email: 'test@test.net',
                role: 'admin',
                age: 26,
            }).then().catch(e => console.log(e))
        /*} catch (e) {
            console.log(e.message);
            console.log(e.fields);
            //if (e.message === 'Unknown fields were detected: role, age')
                done();
        }*/
    });


});
