function palindrome(str) {
  let result = str.split("").reverse().join("");
  return result === str;
}
console.log(palindrome("kayak"));
console.log(palindrome("Money"));
