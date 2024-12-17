function reverse(str) {
  let reversed = "";
  for (i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

function reverse1(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

function reverseInt(n) {
  let result = n.toString().split("").reverse().join("");
  return parseInt(result) * Math.sign(n);
}
console.log(reverseInt(-90));

//Brute force - Naive
function revStr(str) {
  let arr = [];
  let charsArr = str.split("");
  for (let i = charsArr.length - 1; i >= 0; i--) {
    arr.push(charsArr[i]);
  }
  return arr.join("");
}

//Pointers
function revStr2(str) {
  let arr = new Array(str.length);
  let charsArr = str.split("");
  let left = 0;
  let right = charsArr.length - 1;
  while (left <= right) {
    arr[left] = charsArr[right];
    arr[right] = charsArr[left];
    left++;
    right--;
  }
  return arr.join("");
}
