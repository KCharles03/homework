function countTrues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;

      return count;
    }
  }
}
const testArray = [true, true, false, false, true, false, true, false];
console.log(`We found ${countTrues(testArray)}`);