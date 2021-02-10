var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function () {
  //smoke tests
  describe('Smoke Tests', function () {

    it('Should exist the CALC lib', function () {
      expect(calc).to.exist;
    });

    it('Should exist method SUM', function () {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.a.function;
    });

    it('Should exist method sub', function () {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.a.function;
    });

    it('Should exist method mult', function () {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.a.function;
    });

    it('Should exist method div', function () {
      expect(calc.div).to.exist;
      expect(calc.div).to.a.function;
    });

  });

  describe('Sum', function () {
    it('Should return 4 when 2+2', function () {
      expect(calc.sum(2,2)).to.equal(4);
    });
  });

  describe('Sub', function () {
    it('Should return 0 when 2-2', function () {
      expect(calc.sub(2,2)).to.equal(0);
    });

    it('Should return -5 when 5-10', function () {
      expect(calc.sub(5,10)).to.equal(-5);
    });
  });

  describe('Mult', function () {
    it('Should return 4 when 2*2', function () {
      expect(calc.mult(2,2)).to.equal(4);
    });

    it('Should return -5 when -1*5', function () {
      expect(calc.mult(-1,5)).to.equal(-5);
    });
  });

  describe('div', function () {
    it('Should return 2 when 4/2', function () {
      expect(calc.div(4,2)).to.equal(2);
    });

    it('Should return ´Não é possivel divisão por zero.´ when divided by zero', function () {
      expect(calc.div(4,0)).to.equal('Não é possivel divisão por zero.');
    });
  });

});
