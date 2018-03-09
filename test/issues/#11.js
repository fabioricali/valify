const be = require('bejs');
const Valify = require('../../');

describe('valify', function () {

    it('should be return error, unknown type', function () {

        const data = new Valify({
            foo: 'string?',
            location: new Valify({
                coordinates: ['number']
            }, { autoCast: true })
        });

        const result = data({
            location: { coordinates: ["123","321"] }
        });

        console.log(result);
    });
});