function checkEmail() {
    const email = document.getElementsByClassName("notify-user");
    if(!(email) || !(email.contains("@") && email.contains("."))) {
        // remind self grab contents of error message, exclamation error thing, then create an eventListner so when it 
        // invalid display it below
        return;
    }
}