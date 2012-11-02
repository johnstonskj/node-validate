var Assert = require('assert');

exports.isNullOrUndefined = function(o) {
    return (o === null || o === undefined);
};

exports.assertNullOrUndefined = function(o) {
    Assert.ok(exports.isNullOrUndefined(o));
};

exports.assertNotNullOrUndefined = function(o) {
    Assert.ok(!exports.isNullOrUndefined(o));
};

exports.isFunction = function(o) {
    return !!(o && o.constructor && o.call && o.apply);
};

exports.assertFunction = function(o) {
    Assert.ok(exports.isFunction(o));
};

exports.isNumber = function(o) {
    return (typeof o == "number" || o instanceof Number);
};

exports.assertNumber = function(o) {
    Assert.ok(exports.isNumber(o));
};

exports.isInteger = function(o) {
    return (exports.isNumber(o) && o.toString().indexOf('.') === -1);
};

exports.assertInteger = function(o) {
    Assert.ok(exports.isInteger(o));
};

exports.isFloat = function(o) {
    return (exports.isNumber(o) && o.toString().indexOf('.') !== -1);
};

exports.assertFloat = function(o) {
    Assert.ok(exports.isFloat(o));
};

exports.isString = function(o) {
    return (typeof o == "string" || o instanceof String);
};

exports.assertString = function(o) {
    Assert.ok(exports.isString(o));
};

exports.isBoolean = function(o) {
    return (typeof o == "boolean" || o instanceof Boolean);
};

exports.assertBoolean = function(o) {
    Assert.ok(exports.isBoolean(o));
};

exports.isDate = function(o) {
    return (typeof o == "object" && o instanceof Date);
};

exports.assertDate = function(o) {
    Assert.ok(exports.isDate(o));
};

exports.isArray = function(o) {
    return (typeof o == "array" || o instanceof Array);
};

exports.assertArray = function(o) {
    Assert.ok(exports.isArray(o));
};

