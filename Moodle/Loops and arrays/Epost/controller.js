// Javascript

// Controller
function checkEmail() {
    inputEmail = document.getElementById('userInput').value;
    if (inputEmail.includes("@") === true
        && inputEmail.includes('.') === true
        && !inputEmail.includes(' ') == true
        && inputEmail.indexOf('@') < inputEmail.lastIndexOf('.')) {
        emailResult = "Confirmed valid email";
    } else {
        emailResult = "Error: Not a valid email";
    }
    updateView();
    document.getElementById('userInput').focus();

    console.log("Email input:", inputEmail);
    console.log("Includes: '@' =", inputEmail.includes("@"));
    console.log("Includes: '.' =", inputEmail.includes("."));
    console.log("!Includes: ' ' =", !inputEmail.includes(" "));
    console.log("'@' has lower index than last index of '.'", inputEmail.indexOf('@') < inputEmail.lastIndexOf('.'));
}