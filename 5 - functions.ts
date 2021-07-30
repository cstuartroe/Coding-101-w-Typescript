console.log("5. Functions");

function addFive(n: number): number { 
  return n + 5;
}

console.log(addFive(10));

type HasALength = { length: number };

function judgeLength(l: HasALength): void {
  if (l.length > 10) {
    console.log("Wow! That's long!");
  } else if (l.length > 4) {
    console.log("That's medium length.");
  } else {
    console.log("That's a short one.");
  }
}

judgeLength("hello");
judgeLength({length: -5});

// Functions can be attributes, too!

console.log("carpet".substring(3));
console.log("carpet".substring(0, 3));