const email = document.getElementById("notify");
const button = document.getElementById("btn-notify");
const errorMessage = document.getElementById("error-message");

button.addEventListener("click", function checkEmail() {
  let email = document.getElementById("notify");
  let validation
  let re = /\S+@\S+\.\S+/;

  validation = re.test(email.value);
  console.log(validation);

  if (validation === true) {
    email.setAttribute('style', 'border: 3px solid #4f7df3;')
  } else {
    email.setAttribute('style', 'border: 3px solid #ff5263;')
    res.innerHTML = "please enter a valid email address!"
}
});