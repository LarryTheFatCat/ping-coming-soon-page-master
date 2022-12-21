const email = document.getElementById("notify");
const button = document.getElementById("btn-notify");
const errorMessageBlank = document.getElementById("error-message-blank");
const errorMessageInvalid = document.getElementById("error-message-invalid");

function checkEmail() {
  const email = document.getElementById("notify");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const validationEmail = emailRegex.test(email.value); 

  
if(email.value === "") {
  errorMessageInvalid.style.display = "";
  errorMessageBlank.style.display = "block";
} else if(validationEmail === false) { 
  errorMessageBlank.style.display = "";
  errorMessageInvalid.style.display = "block";
}

}