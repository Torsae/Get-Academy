// Javascript

// Controller
function submitEmail(userInput) {
    checkIfValid(userInput);
    if (isValid === true) {
        emailResult = "Confirmed valid email";
    } else {
        emailResult = "Error: Not a valid email";
    }
    console.log("isValid ==",isValid)
    updateView();
    focusInput();
}

function checkIfValid(userInput) {
    console.log("Email input:", userInput);
    console.log("Check if valid")
    console.log("userInput.includes('@') =", userInput.includes("@"));
    console.log("userInput.includes('.') =", userInput.includes("."));
    console.log("!userInput.includes(' ') =", !userInput.includes(" "));
    console.log("userInput.indexOf('@') < userInput.lastIndexOf('.') =", userInput.indexOf('@') < userInput.lastIndexOf('.'));

    if (userInput.includes("@") === true
        && userInput.includes('.') === true
        && !userInput.includes(' ') == true
        && userInput.indexOf('@') < userInput.lastIndexOf('.')) {
            return isValid = true;
        } else {
        return isValid = false;
    }
}

function focusInput() { document.getElementById('userInput').focus(); }