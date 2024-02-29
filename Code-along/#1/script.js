// script.js

// Model
const root = document.getElementById('root');
let canDrink = '';

// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div id='container'>
        <input type="text" onchange="checkAge(this.value)">
        <div>Are you allowed to drink? ${canDrink}</div>
    </div>
`;
}

// Controller

function checkAge(age) {
    let oldEnough = age >= 18;
    if(oldEnough == true) {
        canDrink = 'Yes';
        console.log("true")
    } else {
        canDrink = 'No';
        console.log("false")
    }
    updateView();
}