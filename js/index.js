const email = document.getElementById("notify");
const button = document.getElementById("btn-notify");
const errorMessageBlank = document.getElementById("error-message-blank");
const errorMessageInvalid = document.getElementById("error-message-invalid");

function checkEmail() {
  let email = document.getElementById("notify");
  let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  let validation = emailRegex.test(email.value);

  console.log(validation);

  if(email.value === "") {
    errorMessageBlank.style.display = "block";
  } else if(validation === false) {
    errorMessageInvalid.style.display = "block";
  }


}