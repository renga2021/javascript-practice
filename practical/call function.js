const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Renga",
    lastName: "Raj"
  }
  
 
  document.getElementById("demo").innerHTML = person.fullName.call(person1,"trichy","India"); 