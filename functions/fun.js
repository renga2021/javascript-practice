let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

// function constructor

const myFunction = function (a, b) {return a * b}
document.getElementById("demo").innerHTML = myFunction(4, 3);


// function hoisting
function myFunction(a, b) {
    return a * b;
  }
  let x = myFunction(4, 3);
  document.getElementById("demo").innerHTML = x;

//   function arguments
function myFunction(a, b) {
    return arguments.length;
  }
  document.getElementById("demo").innerHTML = myFunction(4, 3);

//   Arrow function
const x = (x, y) => x * y;
document.getElementById("demo").innerHTML = x(5, 5);