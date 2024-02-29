// Javascript

// Model
const root = document.getElementById('root');
let firstNumber = 0;
let secondNumber = 0;
let points = 0;
let textInput = '';

// View
getRandomNumber();
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div class='container'>
        <div class='innercontainer'>
            <div class="content Number">
                ${firstNumber}
                <input
                class="content"
                id="txt" type='text'
                value="${textInput}"
                onchange="greaterOrSmaller(this.value)"
                maxlength="1"
                >
                ${secondNumber}
            </div>
            <div>Points = ${points}</div>
        </div>
    </div>
    <div style="opacity: 60%;">
    Classic crocodile game;</br>
    Answer ">" or "<" if</br>
    left or right number is larger</br>
    score as many points as possible.
    </div>
`;
}

// Controller

function greaterOrSmaller(givenAnswer) {
    if (givenAnswer === ">") {
        console.log(">")
        if (firstNumber >= secondNumber) {
            points++;
            console.log("Correct");
        } else { console.log("Wrong"); points = 0; }
    }

    if (givenAnswer === "<") {
        console.log("<")
        if (firstNumber <= secondNumber) {
            points++;
            console.log("Correct");
        } else { console.log("Wrong"); points = 0; }
    }
    reset();
}

function reset() {
    console.log("clearText:", textInput)
    textInput = '';
    getRandomNumber();
    document.getElementById("txt").focus();
}

function getRandomNumber() {
    console.log("random");
    firstNumber = Math.round(Math.random() * 10);
    secondNumber = Math.round(Math.random() * 10);
    updateView();
}
