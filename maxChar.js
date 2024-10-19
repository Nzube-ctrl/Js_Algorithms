function maxChar(str) {
  let max = 0;
  let maxChar = "";
  let characters = {};

  for (const char of str) {
    if (characters[char]) {
      characters[char] += 1;
    } else {
      characters[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(characters)) {
    if (characters[key] > max) {
      max = characters[key];
      maxChar = key;
    }
  }
  return maxChar;
}

function maxChar1(str) {
  let max = 0;
  let maxChar = "";
  let characters = {};

  for (const char of str) {
    characters[char] = ++characters[char] || 1;
  }

  for (const key in characters) {
    if (characters[key] > max) {
      max = characters[key];
      maxChar = key;
    }
  }
  return maxChar;
}
