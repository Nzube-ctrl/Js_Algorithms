function vowel(str) {
  let vowelCheck = [`a`, `e`, `i`, `o`, `u`];
  let count = 0;
  for (let char of str) {
    if (vowelCheck.includes(char)) count++;
  }
  return count;
}
