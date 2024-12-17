function palindrome(str) {
  let result = str.split("").reverse().join("");
  return result === str;
}

function isPal(str) {
  let revStr = str.split("").reverse().join("");

  return revStr.toLowerCase() === str.toLowerCase();
}

//Pointers
function isPal2(str) {
  let lcStr = str.toLowerCase();
  let left = 0;
  let right = lcStr.length - 1;

  while (left < right) {
    if (lcStr[left] !== lcStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
