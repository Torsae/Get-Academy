// Javascript

// Model
const root = document.getElementById('root');
let stopValue = 10;

// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div class='container'>
            <button onclick='printNumbers()'>Print numbers</button>
            <div id=numbers></div>
    </div>
`;
}

// Controller
function printNumbers() {
    for (let counter = 1; counter <= stopValue; counter++) {
        document.getElementById('numbers').innerHTML += '<li>' + counter * 2 + '</li>';
    }

}