// Javascript

// Model
const root = document.getElementById('root');
let displayedNumber1 = 0;
let displayedNumber2 = 0;

// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div class='container'>
            <div id='displayNumbers'>
            Equal numbers found: 
            ${displayedNumber1}
             & 
            ${displayedNumber2}
            </div>
            <button onclick='rerollNumbers()'>Generate Numbers</button>
    </div>
`;
}

// Controller

function rerollNumbers() {
    displayedNumber1 = 0;
    displayedNumber2 = 1;

    while (displayedNumber1 !== displayedNumber2) {
        displayedNumber1 = generateRandomNumber();
        console.log("Set displayedNumber1 to ", displayedNumber1);

        displayedNumber2 = generateRandomNumber();
        console.log("Set displayedNumber2 to ", displayedNumber2);

        // Console log for results
        if (displayedNumber1 == displayedNumber2) {
            console.log("EQUAL NUMBERS FOUND")
        } else { console.log("NOT EQUAL") }
        console.log("")
    }
    updateView();
}

function generateRandomNumber() {
    console.log("Generating Random Numbers")
    return Math.floor(Math.random() * 10);;
}