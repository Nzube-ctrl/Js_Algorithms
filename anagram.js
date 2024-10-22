function charMap(str) {
  let charMap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
  }
  return charMap;
}

function anagram(strA, strB) {
  let MapA = charMap(strA);
  let MapB = charMap(strB);

  if (Object.keys(MapA).length !== Object.keys(MapB).length) return false;

  for (let key in MapA) {
    if (MapA[key] !== MapB[key]) return false;
  }

  return true;
}

//Second Method
function sortStr(str) {
  str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagram1(stringA, stringB) {
  return sortStr(stringA) === sortStr(stringB);
}
