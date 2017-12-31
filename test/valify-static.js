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
    describe('printArgs', function () {
        it('should return true', function () {
            let result = Model.printArgs({0: '', 1: ''});
            console.log(result);
            console.log(JSON.stringify({}));
            //be.err.false(result);
        });
    });
});