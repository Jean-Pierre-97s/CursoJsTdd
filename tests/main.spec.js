const { expect } = require('chai');
const fizzbuzz = require('../src/main.js');

describe('FizzBuzz', () => {
  it('Should return Fizz when mutilple of 3', () => {
    expect(fizzbuzz.fizzbuzz(3)).to.equal('Fizz');
    expect(fizzbuzz.fizzbuzz(6)).to.equal('Fizz');
    expect(fizzbuzz.fizzbuzz(9)).to.equal('Fizz');
  });

  it('Should return Buzz when mutilple of 5', () => {
    expect(fizzbuzz.fizzbuzz(5)).to.equal('Buzz');
    expect(fizzbuzz.fizzbuzz(10)).to.equal('Buzz');
  });

  it('Should return FizzBuzz when mutilple of 5 and 3', () => {
    expect(fizzbuzz.fizzbuzz(15)).to.equal('FizzBuzz');
  });

  it('Should return num when not mutilple of 5 or 3', () => {
    expect(fizzbuzz.fizzbuzz(2)).to.equal(2);
    expect(fizzbuzz.fizzbuzz(7)).to.equal(7);
  });

  it('Should return 0 when 0', () => {
    expect(fizzbuzz.fizzbuzz(0)).to.equal(0);
  });
});
