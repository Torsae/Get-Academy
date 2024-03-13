// Javascript

// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <input type='text' id='userInput' onchange=submitEmail(this.value)>
    <div>${emailResult}</div>
    `;
}