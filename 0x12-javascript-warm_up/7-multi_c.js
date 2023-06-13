#!/usr/bin/node
const numOfPrints = Math.floor(Number(process.argv[2]));
if (isNaN(numOfPrints)) {
  console.log('Missing number of occurrences');
} else {
  let i = numOfPrints;
  while (i > 0) {
    console.log('C is fun');
    i--;
  }
}
