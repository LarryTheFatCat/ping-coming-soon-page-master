const email = document.getElementById("notify");
const button = document.getElementById("btn-notify");
const errorMessageBlank = document.getElementById("error-message-blank");
const errorMessageInvalid = document.getElementById("error-message-invalid");

function checkEmail() {
  const email = document.getElementById("notify");
  // let validation; // No reason setting it here
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  
  // we never change it so why not just have it as const
  const validation = emailRegex.test(email.value);

  console.log(validation);

  if(!validation) {
    errorMessageBlank.style.display = "block";
  }
}