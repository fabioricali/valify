const be = require('bejs');
const Types = require('../src/types');

describe('types', function () {
    describe('number', function () {
        it('should be return true', function () {

            be.err.true(Types.number(2));
        })
    });
});