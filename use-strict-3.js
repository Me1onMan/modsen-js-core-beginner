"use strict";

function countVowels(str) {
  const vowels = new RegExp(/[aeiouy]/g);
  return [...str.matchAll(vowels)].length;
}

console.log(countVowels("array of letters"));
