//Function that reverses words in a string

let revWords = (s) => {
  let words = s.trim().split(/\s+/);
  let reversed = words.reverse();
  return reversed.join(" ");
};

console.log(revWords(`Hello World`));

//Function that returns length of last word in a string
let lengthOfLastWord = (str) => {
  let words = str.trim().split(" ");
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord(`Hello World!`));
