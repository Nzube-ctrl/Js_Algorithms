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
// console.log(reverse2("Money"));

function reverseInt(n) {
  let result = n.toString().split("").reverse().join("");
  return parseInt(result) * Math.sign(n);
}
console.log(reverseInt(-90));
