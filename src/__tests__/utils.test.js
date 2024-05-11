// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  // Other test cases...

  test('returns false for empty string', () => {
    expect(() => {
      isPalindrome('');
    }).toThrow('Input must contain only alphabetic characters');
  });

  // Other test cases...
});

