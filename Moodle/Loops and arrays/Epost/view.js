// Javascript

// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <input type='text' id='userInput' onchange=checkEmail()>
    <div>${emailResult}</div>
    `;
}