//Function that reverses words in a string

let revWords = (s) => {
  let words = s.trim().split(/\s+/);
  let reversed = words.reverse();
  return reversed.join(" ");
};

console.log(revWords(`Hello World`));
