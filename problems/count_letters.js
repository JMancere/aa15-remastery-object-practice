/*
Given a string, write a function "countLetters" that returns the most
common character within the sentence. If there are multiple characters
that appear the most, return the lexicographically smallest one
(e.g. if 'a' and 'b' are both the most common, return 'a' because it
is closest to the beginning of the alphabet). Be sure to exclude spaces
and punctuation.
*/

const countLetters = (s) => {
    // your code here
  let store = {}
  s = s.toLowerCase();
  for (c of s){
    if (c >= 'a' && c <= 'z'){
      store[c] ? store[c]++ : store[c] = 1;
    }
  }
  let max = 0;
  let foundmax;
  for (c in store){ //gives keys
    if (store[c] > max){
      foundmax = c
      max = store[c];
    } else if (store[c] === max){
      if (c < foundmax)
        foundmax = c;
    }
  }
 return foundmax;
}

 //console.log(countLetters("The quick, brown fox jumped over the lazy dog.")); // e


/*** Do not change the code after this line ***/

module.exports = {
	countLetters,
};
