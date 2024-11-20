function palindrome(str) {
  let result = str.split("").reverse().join("");
  return result === str;
}
