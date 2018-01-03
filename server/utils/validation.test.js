const expect = require('expect');
let { isRealString } = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let string = 89052499999;
    expect(isRealString(string)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let string = '     ';
    expect(isRealString(string)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    let string = '  Tom#89  ';
    expect(isRealString(string)).toBe(true);
  });
});
