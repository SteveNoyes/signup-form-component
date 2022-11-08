// FORM CHECK 

function check () {
  // INIT
  var valid = true, error = "", field = "";
  // First Name
  field = document.getElementById("fcname");
  error = document.getElementById("fname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // Last Name
  field = document.getElementById("lcname");
  error = document.getElementById("cname");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // Email
  field = document.getElementById("email");
  error = document.getElementById("cemail");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Looks like this is not an email";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // Password
  field = document.getElementById("pwd");
  error = document.getElementById("cpwd");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Password cannot be empty";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }
  // Result
  return valid;
}