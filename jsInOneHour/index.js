console.log("hello from js");

// var or let defines variable
//undefined
let name;
console.log(name);
name = "john";
console.log(name);

// like final in java
const interestRate = 0.3;

//primitives
//String Number Boolean undefined null

let age = 30;
let isValid = true;
let firstName = undefined; // is a type and value. Default value of variable is undefined.
let selectedColor = null; // type of that is object

// js is dynamic language, value of variable can change during runtime

// Reference Types
//object array function

let person = {
  name: "john",
  age: 30,
}; //object literal

console.log(person);
console.log(person.age);

person.name = "doe";

//Bracket notation
person["age"] = 23;

let selection = "name";
person[selection] = " mary";

console.log(person);

//array is object in js
let colors = ["red", "blue"];
console.log(colors[0]);
colors[3] = "green";
console.log(colors[2]);

//functions
//set of statements

function greet(name) {
  console.log("hello " + name);
}

greet(2);

function square(number) {
  return number * number;
}

console.log(square(9));
