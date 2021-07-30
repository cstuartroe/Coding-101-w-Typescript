console.log("6. Arrays")

const nums: number[] = [1, 2, 5, 9];

console.log(nums);

// Like strings, arrays can be empty
const a = [];

// Indexing starts at 0
console.log(nums[0]);
console.log(nums[1]);

// Arrays have a length too!
console.log(nums.length);

// Assigning specific elements
nums[1] = 0;
console.log(nums);

// Common array functions

nums.sort();
console.log(nums);

console.log(nums.slice(2));
console.log(nums.slice(0, 2));

function logSomeLetters(n: number): void {
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(alphabet.substring(0, n));
}

nums.forEach(logSomeLetters);

// Array elements can be anything

type Vehicle = { wheels: number, color: string };

const vehicles: Vehicle[] = [{wheels: 4, color: "red"}, {wheels: 3, color: "white"}];

// even other arrays!

const numArrayArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];