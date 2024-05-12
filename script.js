function validation() {
    var username = document.forms["FormFill"]["Username"].value;
    var email = document.forms["FormFill"]["Email"].value;
    var password = document.forms["FormFill"]["Password"].value;
    var cpassword = document.forms["FormFill"]["CPassword"].value;
    var errorMessage = document.getElementById("result");

    if (username == "") {
        errorMessage.textContent = "Please enter your username";
        return false;
    } else if (username.length < 6) {
        errorMessage.textContent = "Username must be at least 6 characters";
        return false;
    } else if (email == "") {
        errorMessage.textContent = "Please enter your email";
        return false;
    } else if (password == "") {
        errorMessage.textContent = "Please enter your password";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters";
        return false;
    } else if (cpassword == "") {
        errorMessage.textContent = "Please confirm your password";
        return false;
    } else if (password !== cpassword) {
        errorMessage.textContent = "Passwords do not match";
        return false;
    } else {
        document.getElementById("popup").classList.add("open-slide");
        return false; 
    }
}

function closeSlide() {
    document.getElementById("popup").classList.remove("open-slide");
}
