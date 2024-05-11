// src/utils.js

function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    const cleanWord = word.toLowerCase();
    if (cleanWord.length === 0) {
      return false; // Empty string is not a palindrome
    }
  
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
  }
  
  module.exports = { isPalindrome };
  