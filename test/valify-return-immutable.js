
const be = require('bejs');
const Model = require('..');

describe('valify-return-immutable', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be different', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: {
                type: 'string',
                convert: value => value.toUpperCase()
            },
            email: 'email'
        }, {returnImmutable: true});

        const data = {
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net'
        };

        const newData = userModel(data);

        console.log(data.lastName, newData.lastName);

        be.err(done).not.equal(data, newData);
    });

    it('should be equal', function (done) {

        const userModel = new Model({
            firstName: 'string',
            lastName: {
                type: 'string',
                convert: value => value.toUpperCase()
            },
            email: 'email'
        }, {returnImmutable: false});

        const data = {
            firstName: 'Mike',
            lastName: 'Storm',
            email: 'test@test.net'
        };

        const newData = userModel(data);

        console.log(data.lastName, newData.lastName);

        be.err(done).equal(data, newData);
    });

    it('should be return ok, inner record', function (done) {

        const source = new Model({
            title: {
                type: 'string',
                convert: value => value.toUpperCase()
            },
            metadataSplitter: {
                type: 'string',
                default: ' - '
            }
        }, {
            returnImmutable: true
        });

        const userModel = new Model({
            aNumber: 'int',
            sources: {
                type: [source]
            }
        }, {
            returnImmutable: true
        });


        let o = {
            title: 'hello'
        };

        let result = userModel({
            aNumber: 24,
            sources: [
                o
            ]
        });

        console.log(o);
        console.log(result);

        if (o.title !== result.sources[0].title && result.sources[0].metadataSplitter === ' - ')
            done();
    });

    it('should be return ok, inner record, test 2', function (done) {

        const source = new Model({
            title: {
                type: 'string',
                convert: value => value.toUpperCase()
            },
            metadataSplitter: {
                type: 'string',
                default: ' - '
            }
        }, {
            returnImmutable: true
        });

        const userModel = new Model({
            aNumber: 'int',
            sources: {
                type: [source]
            }
        }, {
            returnImmutable: true
        });


        let o = [{
            title: 'hello'
        }];

        let result = userModel({
            aNumber: 24,
            sources: o
        });

        console.log(o);
        console.log(result);

        if (o[0].title !== result.sources[0].title && result.sources[0].metadataSplitter === ' - ')
            done();
    });
});
