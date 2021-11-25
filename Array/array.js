const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

const cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo").innerHTML = cars;

// pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;

// push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;

// shift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;

// length()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits[fruits.length] = "Kiwi";
document.getElementById("demo2").innerHTML = fruits;

// delete()
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo1").innerHTML =
"The first fruit is: " + fruits[0];

delete fruits[0];

document.getElementById("demo2").innerHTML =
"The first fruit is: " + fruits[0];

// Splicing a array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo2").innerHTML = fruits;

// merging(or)Concatent
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren = array1.concat(array2, array3); 

document.getElementById("demo").innerHTML = myChildren;

// Sorting an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.sort();
document.getElementById("demo2").innerHTML = fruits;

// Reversing an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

// Then reverse it:
fruits.reverse();

document.getElementById("demo2").innerHTML = fruits;

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = points;