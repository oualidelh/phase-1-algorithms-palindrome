function isPalindrome(word) {
  //first solution :
  let revString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    revString += word[i];
  }
  return revString === word;
  // second solution :
  // let i = 0;
  // let j = word.length - 1;
  // while (word[i] === word[j]) {
  //   if (i === word.length - 1 && j === 0) {
  //     return true;
  //   }
  //   j--;
  //   i++;
  // }
  // return false;
}
console.log(isPalindrome("mom"));
/*
  Add your pseudocode here
*/

/*
  in this function i first thinked about how to iterate over a string 
  than i thinked that if string is palindrome that means is the reverse 
  of this strinf is equal to the main string than i compared the reverse with 
  the original String if they are equal it will return true if not it will return false
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
