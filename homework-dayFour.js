for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("BLAST OFF!!!!!!!!!!");

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

function findMinMax(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);

  let r = [max, min];
  return r;
  // console.log(min, max);
}

const arr = [200, 250, 196, 7, 1000];

const answer = findMinMax(arr);

console.log(answer);

let str = "WHAT a TIME to BE ALIVE!";

console.log(str.toUpperCase());

for (let i = 1; i <= 16; i++) {
  console.log(i);
}
