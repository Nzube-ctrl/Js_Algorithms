function capitalize(str) {
  const words = str.split(" ");
  const result = [];
  for (const word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}
console.log(capitalize("i am the danger"));

function capitalize1(str) {
  const words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize1("i am groot"));
