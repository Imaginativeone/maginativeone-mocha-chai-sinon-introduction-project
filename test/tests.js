var chai   = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.assert;

var Add    = require('../maths');

describe('Addition Tests', function() {

  it('should return 3 when passed one and two', function() {

    var numberOne = 1;
    var numberTwo = 2;

    var expectedResult = 3;
    var notExpectedResult = 7;

    var actualResult = Add(numberOne, numberTwo);

    // actualResult.should.equal(expectedResult);
    expect(actualResult).to.not.equal(notExpectedResult);

    assert.equal(actualResult, expectedResult);

  });

})