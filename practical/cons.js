class Person {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myId = new Person("Renga", 1996);
  document.getElementById("demo").innerHTML =
  "My name is "+myId.name +" and iam "+ myId.age() + " years old.";

// class inheritance
  class Bike {
    constructor(brand) {
      this.bikename = brand;
    }
    present() {
      return 'I have a ' + this.bikename;
    }
  }
  
  class Model extends Bike {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myBike = new Model("bullet 350", "Royal Enfield");
  document.getElementById("demo1").innerHTML = myBike.show();