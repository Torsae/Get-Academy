// Javascript
// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div>Answer: ${displayedAnswer}</div>
    <button onclick='getRandomIndex()'>Get 8 ball answer</button>
`;
}