function chunk(array, size) {
  let result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}
console.log(chunk([1, 3, 4, 5, 5, 6, 6, 6], 2));
