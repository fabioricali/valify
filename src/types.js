const be = require('bejs');

module.exports = {
    alphanumeric:       be.alphanumeric.bind(this),
    argument:           be.argument.bind(this),
    array:              be.array.bind(this),
    boolean:            be.boolean.bind(this),
    buffer:             be.buffer.bind(this),
    date:               be.date.bind(this),
    error:              be.error.bind(this),
    float:              be.float.bind(this),
    float32array:       be.float32Array.bind(this),
    float64array:       be.float64Array.bind(this),
    function:           be.function.bind(this),
    generatorfunction:  be.generatorFunction.bind(this),
    int:                be.int.bind(this),
    int16array:         be.int16Array.bind(this),
    int32array:         be.int32Array.bind(this),
    int8array:          be.int8Array.bind(this),
    map:                be.map.bind(this),
    null:               be.null.bind(this),
    number:             be.number.bind(this),
    object:             be.object.bind(this),
    promise:            be.promise.bind(this),
    regexp:             be.regexp.bind(this),
    set:                be.oSet.bind(this),
    string:             be.string.bind(this),
    symbol:             be.symbol.bind(this),
    uint16array:        be.uint16Array.bind(this),
    uint32array:        be.uint32Array.bind(this),
    uint8array:         be.uint8Array.bind(this),
    uint8clampedarray:  be.uint8ClampedArray.bind(this),
    undefined:          be.undefined.bind(this),
    weakmap:            be.weakMap.bind(this),
    weakset:            be.weakSet.bind(this)
};