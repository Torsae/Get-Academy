// Javascript

// Model
const root = document.getElementById('root');
let textInput = '';
let reversedText = '';

// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div class='container'>
        <div>
            <input id='txt'
            type='text'
            onchange=printLettersInReverse(this.value)>
            <button onclick="reset('full');">Clear list</button>
        </div>
    <div id='letters'></div>
    </div>
    `;
    refocusOnInput();
}

// Controller

function printLettersInReverse(inputString) {
    for (let index = 0; index <= inputString.length; index++) {
        textInput = textInput + inputString.charAt(index);
    }
    reversedText = textInput.split("").reverse().join("");
    document.getElementById('letters').innerHTML += '<li>' + reversedText + '</li>';
    textInput = '';
    reset();
}

function reset(amount) {
    console.log("clearText:")
    document.getElementById('txt').value = '';
    refocusOnInput();
    if (amount == 'full') { updateView(); }
}

function refocusOnInput() {
    document.getElementById('txt').focus();
}