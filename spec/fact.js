var path = require('path');
var expect = require('chai').expect;

var fact = require(path.join(__dirname, '..', './fact.js'));

describe('fact()', function () {
  'use strict';

  it('exists', function () {
    expect(fact).to.be.a('function');

  });

  it('fact(4) = 24', function () {
    expect(fact(4)).to.equal(24);
  });

  it('fact(10) = 3628800', function () {
    expect(fact(10)).to.equal(3628800);
  });

  it('fact(0) = 1', function () {
    expect(fact(0)).to.equal(1);
  });

  it('fact(1) = 1', function () {
    expect(fact(1)).to.equal(1);
  });

  it('fact(-7) = undefined', function () {
    expect(fact(-7)).to.equal(undefined);
  });

  it('fact(string) = undefined', function () {
    expect(fact('string')).to.equal(undefined);
  });

  // Add more assertions here
});
