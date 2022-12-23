const email = document.getElementById("notify");
const button = document.getElementById("btn-notify");
const errorMessageBlank = document.getElementById("error-message-blank");
const errorMessageInvalid = document.getElementById("error-message-invalid");

function checkEmail() {
  const email = document.getElementById("notify");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const validationEmail = emailRegex.test(email.value); 

  
  let isEmpty = email.value === "";
  errorMessageBlank.style.display = isEmpty? "block" : "";
  errorMessageInvalid.style.display= (!validationEmail && !isEmpty)? "block" : ""

}