
const person = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

const x = person;
x.age = 10;

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";


// console.log(person)



const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  document.getElementById("demo").innerHTML = person.fullName();