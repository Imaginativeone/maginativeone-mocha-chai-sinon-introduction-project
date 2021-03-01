var chai   = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.assert;

var sinon  = require('sinon');

var Add    = require('../maths');

describe('Addition Tests', function() {

  it('should return 3 when passed one and two', function() {

    var numberOne = 1;
    var numberTwo = 2;

    var logSpy = sinon.spy();

    console.log('Add function was called.', Add(100, 101));
    // console.log('logSpy', logSpy());

    Add(numberOne, numberTwo, logSpy());

    // The next line uses CHAI
    logSpy.called.should.be.true;

  });

})