// (C) FORM CHECK 

function check () {
  // (C1) INIT
  var valid = true, error = "", field = "";
  // (C2) First Name
  field = document.getElementById("fname");
  error = document.getElementById("cname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // (C2) Last Name
  field = document.getElementById("lname");
  error = document.getElementById("cname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // (C3) NUMBER
  field = document.getElementById("fnumber");
  error = document.getElementById("cnumber");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Num must be between 1-12\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // (C4) RESULT
  return valid;
}