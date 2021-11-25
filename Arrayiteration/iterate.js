// Each()
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}

// Map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

document.getElementById("demo").innerHTML = numbers2;

function myFunction(value, index, array) {
  return value * 2;
}

// Filter()
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}

// Reduce()
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}

// ReduceRight()
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total, value, index, array) {
  return total + value;
}

// Every()
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;

function myFunction(value, index, array) {
  return value > 18;
}

// Some()
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}

// IndexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo").innerHTML = "Apple is found in position " + position;

// Includes()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.includes("Mango");

// Find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

document.getElementById("demo").innerHTML = "First number over 18 is " + first;

function myFunction(value, index, array) {
  return value > 18;
}

// Form()
const myArr = Array.from("ABCDEFG");
document.getElementById("demo").innerHTML = myArr;

// Keys
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;