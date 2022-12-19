const email = document.getElementById("notify");
const button = document.getElementById("btn-notify");
const errorMessageBlank = document.getElementById("error-message-blank");
const errorMessageInvalid = document.getElementById("error-message-invalid");

function checkEmail() {
  const email = document.getElementById("notify");
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  
  // we never change it so why not just have it as const
  const validation = emailRegex.test(email.value);

  console.log(validation);

  if(email.value === "") {
    errorMessageBlank.style.display = "block";
  // it should always be true or false so you can just do !validation
  } else if (!validation) {
    errorMessageInvalid.style.display = "block";
  }
}