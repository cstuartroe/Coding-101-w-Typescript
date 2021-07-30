console.log("4. If Statements");

const your_name: string = "Mia";

console.log(your_name.length);
console.log(your_name.length > 4);
console.log(typeof (your_name.length > 4));

if (your_name.length > 4) {
  console.log(your_name + " is a long name.");
} else {
  console.log(your_name + " is a short name.");
}

// Name      Type      Value    Mutable?
// your_name string    "Mia"    no