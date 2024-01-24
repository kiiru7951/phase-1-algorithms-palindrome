function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('')
  return word.toLowerCase() === reversedWord.toLowerCase()
}

/* 
  Add your pseudocode here
  word -> array
  array.reverse() => reversed array
  reversed array => reversedWord
  if(reversedWord === word)
  if yes => return true
  if not => return false
*/

/*
  Add written explanation of your solution here
  1. turn a given string into an array 
  2. reverse it with javascript's builtin method reverse() 
  3. turn array to string
  4. compare it with the given string
  5. return true if palindrome, else false 
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=> ", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


// function isPalindrome(word) {
//   // Write your algorithm here
//   let reversedWord = reverse(word)
//   return word.toLowerCase() === reversedWord.toLowerCase()
// }

