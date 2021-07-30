console.log("9. Algorithm Practice");

// Write a function that multiplies together all the numbers in a list

function multiplyNumbers(numbers: number[]): number {
  return 0;
}

console.log(multiplyNumbers([1, 2, 3])); // 6
console.log(multiplyNumbers([5, 9])); // 45
console.log(multiplyNumbers([7])); // What should this be?
console.log(multiplyNumbers([])); // What should this be?

// Write a function to return every other character of a string

function everyOtherCharacter(s: string): string {
  return "";
}

console.log(everyOtherCharacter("TypeScript")); // TpSrp
console.log(everyOtherCharacter("It is even fun!"));

// Write a function that transforms a string so the nth character appears n times

function transformString(s: string): string {
  return "";
}

console.log(transformString("word")); // woorrrdddd
console.log(transformString(". /")); // .  ///

// Write a function that accesses an element in a 2d array

function access2D(matrix: number[][], x: number, y: number): number {
  return 0;
}

const numArrayArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(access2D(numArrayArray, 0, 0)); // 1
console.log(access2D(numArrayArray, 2, 1)); // 8

// Write a function that logs a "staircase"

function staircase(n: number): void {
}

staircase(3);

// should print:
//   #
//  ##
// ###

// Write a function that finds the smallest and largest in a list of numbers

function minMax(numbers: number[]): {min: number, max: number} {
  return {min: 0, max: 0};
}

console.log(minMax([4, 1, 9, -6])); // {min: -6, max: 9}