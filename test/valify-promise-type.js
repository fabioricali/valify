
const be = require('bejs');
const Model = require('..');

describe('valify-promise-types', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('1# should be return failed', function (done) {

        const userModel = new Model({
            firstName: (value) => new Promise((resolve, reject) => {
                reject('error verification')
            }),
            lastName: 'string',
            email: 'email'
        }, {usePromise: true});

        userModel({
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net',
            role: 'admin',
            age: 26,
        }).then().catch(e => {
            console.error(e);
            done();
        })
    });

    it('#2 should be return failed', function (done) {

        const userModel = new Model({
            firstName(value) {
                return new Promise((resolve, reject) => {
                    reject('error verification')
                })
            },
            lastName: 'string',
            email: 'email'
        }, {usePromise: true});

        userModel({
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net',
            role: 'admin',
            age: 26,
        }).then().catch(e => {
            console.error(e);
            done();
        })
    });

    it('#3 should be return failed', function (done) {

        function checkFirstName(value) {
            return new Promise((resolve, reject) => {
                reject('error verification')
            })
        }

        const userModel = new Model({
            firstName: checkFirstName,
            lastName: 'string',
            email: 'email'
        }, {usePromise: true});

        userModel({
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net',
            role: 'admin',
            age: 26,
        }).then().catch(e => {
            console.error(e);
            done();
        })
    });

    it('4# should be return failed', function (done) {

        const userModel = new Model({
            firstName: async (value) => new Promise((resolve, reject) => {
                reject('error verification')
            }),
            lastName: 'string',
            email: 'email'
        }, {usePromise: true});

        userModel({
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net',
            role: 'admin',
            age: 26,
        }).then().catch(e => {
            console.error(e);
            done();
        })
    });

    it('5# should be return failed', function (done) {

        const userModel = new Model({
            firstName: (value) => new Promise((resolve, reject) => {
                setTimeout(() => reject('error verification'), 100)
            }),
            lastName: 'string',
            email: 'email'
        }, {usePromise: true});

        userModel({
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net',
            role: 'admin',
            age: 26,
        }).then().catch(e => {
            console.error(e);
            done();
        })
    });
});
