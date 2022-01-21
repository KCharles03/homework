// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####
const symbol = "#";

let line = symbol;

for (let i = 0; i < 5; i++) {
  console.log(line);
  line += symbol;
}
