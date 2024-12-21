//Method that replaces all spaces in a string with "%20"
//n  = size of string ignoring ending spaces
const UrlIfy = ((str, n) => {
  let newStr = ``;
  for (let i = 0; i < n; i++) {
    if (str[i] === ` `) newStr += `%20`;
    else newStr += str[i];
  }
  console.log(newStr);
})("Mr John Smith", 13);

