console.log("3. Objects, Attributes, and Custom Types");

type Color = "red" | "white" | "black" | "blue";

type Vehicle = {
  wheels: number,
  color: Color,
};

const my_car = {
  wheels: 4,
  color: "white",
};

console.log(my_car);
console.log(my_car.wheels + 10);
console.log("My car is " + my_car.color);

// Everything in TS is just an object with attributes!

type HasALength = {
  length: number,
};

let length_haver: HasALength = "This is a string and it has a length!";

console.log(length_haver.length);

length_haver = { length: 10 };

console.log(length_haver.length);
