var Assert = require('assert');
var Validate = require('../lib/validate');

var fun = function() {}
  , date = new Date()
  , arr = []
  , obj = {}
  , allValues = [null, undefined, fun, '', 1, 1.1, 1/0, date, arr, obj];

function innerSuccess(predicate, values) {
    for (var idx in values) {
        var value = values[idx];
        if (value === null) {
            Assert.ok(predicate(value), 'Predicate function should have returned true for value <null>');
        } else if (value === undefined) {
            Assert.ok(predicate(value), 'Predicate function should have returned true for value <undefined>');
        } else {
            Assert.ok(predicate(value), 'Predicate function should have returned true for value <' + value.toString() + '>');
        }
    }
}

function innerFailure(predicate, values) {
    for (var idx in allValues) {
        if (values.indexOf(allValues[idx]) === -1) {
            var value = allValues[idx];
            if (value === null) {
                Assert.ok(!predicate(value), 'Predicate function should have returned false for value <null>');
            } else if (value === undefined) {
                Assert.ok(!predicate(value), 'Predicate function should have returned false for value <undefined>');
            } else {
                Assert.ok(!predicate(value), 'Predicate function should have returned false for value <' + value.toString() + '>');
            }
        }
    }
}

function innerAssertSuccess(predicate, values) {
    for (var idx in values) {
        var value = values[idx];
        if (value === null) {
            Assert.doesNotThrow(
                function() { predicate(value); },
                Error,
                'assertion should not have thrown an error for value <null>');
        } else if (value === undefined) {
            Assert.doesNotThrow(
                function() { predicate(value); },
                Error,
                'assertion should not have thrown an error for value <undefined>');
        } else {
            Assert.doesNotThrow(
                function() { predicate(value); },
                Error,
                'assertion should not have thrown an error for value <' + value.toString() + '>');
        }
    }
}

function innerAssertFailure(predicate, values) {
    for (var idx in allValues) {
        if (values.indexOf(allValues[idx]) === -1) {
            var value = allValues[idx];
            if (value === null) {
                Assert.throws(
                    function() { predicate(value); },
                    Error,
                    'assertion should have thrown an error for value <null>');
            } else if (value === undefined) {
                Assert.throws(
                    function() { predicate(value); },
                    Error,
                    'assertion should have thrown an error for value <undefined>');
            } else {
                Assert.throws(
                    function() { predicate(value); },
                    Error,
                    'assertion should have thrown an error for value <' + value.toString() + '>');
            }
        }
    }
}

function innerPredicateTest(predicate, values) {
    return function(done) {
        it('test all manner of true', function(done) {
            innerSuccess(predicate, values);
            done();
        });

        it('test all manner of false', function(done) {
            innerFailure(predicate, values);
            done();
        });
    };
}

function innerAssertionTest(predicate, values) {
    return function(done) {
        it('test assertion success', function(done) {
            innerAssertSuccess(predicate, values);
            done();
        });

        it('test assertion exception', function(done) {
            innerAssertFailure(predicate, values);
            done();
        });
    };
}

describe('Validate', function() {

    describe('#isNullOrUndef()', innerPredicateTest(Validate.isNullOrUndefined, [null, undefined]));
    describe('#assertNullOrUndefined()', innerAssertionTest(Validate.assertNullOrUndefined, [null, undefined]));
    describe('#assertNotNullOrUndefined()', innerAssertionTest(Validate.assertNotNullOrUndefined, [fun, '', 1, 1.1, 1/0, date, arr, obj]));

    describe('#isString()', innerPredicateTest(Validate.isString, ['']));
    describe('#assertString()', innerAssertionTest(Validate.assertString, ['']));

    describe('#isNumber()', innerPredicateTest(Validate.isNumber, [1, 1.1, 1/0]));
    describe('#assertNumber()', innerAssertionTest(Validate.assertNumber, [1, 1.1, 1/0]));

    describe('#isInteger()', innerPredicateTest(Validate.isInteger, [1, 1/0]));
    describe('#assertInteger()', innerAssertionTest(Validate.assertInteger, [1, 1/0]));

    describe('#isFloat()', innerPredicateTest(Validate.isFloat, [1.1]));
    describe('#assertFloat()', innerAssertionTest(Validate.assertFloat, [1.1]));

    describe('#isFunction()', innerPredicateTest(Validate.isFunction, [fun]));
    describe('#assertFunction()', innerAssertionTest(Validate.assertFunction, [fun]));

    describe('#isDate()', innerPredicateTest(Validate.isDate, [date]));
    describe('#assertDate()', innerAssertionTest(Validate.assertDate, [date]));

    describe('#isArray()', innerPredicateTest(Validate.isArray, [arr]));
    describe('#assertArray()', innerAssertionTest(Validate.assertArray, [arr]));

});
