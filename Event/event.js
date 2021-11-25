
// onClick Event
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

//   onchange event
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

//   mouse over event
function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

//   mouse out
function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }