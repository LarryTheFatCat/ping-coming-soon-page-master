const email = document.getElementById("notify")[0].value;
const button = document.getElementById("btn-notify")[0].value;
const errorMessage = document.getElementById("error-message")[0].value;

function checkEmail() {
    if(!email || !email.includes("@") || !email.includes(".")) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
}