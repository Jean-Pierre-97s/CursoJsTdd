var expect = require('chai').expect;

describe('Main', function () {
  var arr;

  beforeEach(function () {
    arr = [1, 2, 3];
  });

    it('Should be array', function () {
      expect(arr).to.be.a('array');
    });
    //--------------------------
    it('Should have a size of 4 when push another value to the array', function () {
      arr.push(4);
      expect(arr).to.have.lengthOf(4);
    });
    //--------------------------
    it('Should remove the value 3 from the array', function () {
      arr.pop();
      expect(arr).to.not.contain(3);
    });
    //--------------------------
    it('Should have a size of 2 when pop one value from the array', function () {
      arr.pop();
      expect(arr).to.have.lengthOf(2);
    });


});
