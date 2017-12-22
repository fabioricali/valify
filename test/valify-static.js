const Model = require('..');
const be = require('bejs');

describe('valify-static', function () {
    describe('isInstance', function () {
        it('should return false', function () {
            function valid() {}
            let result = Model.isInstance(valid);
            be.err.false(result);
        });
        it('should return true', function () {
            let myModel = new Model();
            let result = Model.isInstance(myModel);
            be.err.true(result);
        });
    });
});