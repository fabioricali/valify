/**
 * Locale object
 * @type {{UNKNOWN_TYPE: string, TYPE_FAIL: string, TYPE_FUNCTION_FAIL: string, FIELD_REQUIRED: string, DATA_REQUIRED: string}}
 */
module.exports = {
    UNKNOWN_TYPE: 'Unknown type: "{type}"',
    TYPE_FAIL: '{field} expects {type} but receives: {dataField}',
    VALIDATOR_FAIL: '{field} fail, {validator} returns false',
    TYPE_ARRAY_FAIL: '{field} expects array of {type} but receives: {dataField}',
    TYPE_FUNCTION_FAIL: '{field} receives: {dataField}',
    FIELD_REQUIRED: '{field} is required',
    DATA_REQUIRED: 'Data is required and must be an object'
};