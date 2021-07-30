console.log("7. For Loops");

// There are actually two kinds of for loops

// For loops using "of" are similar to forEach

let sum = 0;
const numbers = [1, 2, 5, 9];

for (const n of numbers) {
  sum = sum + n;
}

console.log(sum);

// You can also make for loops like so:

for (let i = 0; i < 10; i++) {
  console.log(i);
}