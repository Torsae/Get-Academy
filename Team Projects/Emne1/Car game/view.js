// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
    <div class='container'>
            <div id='placeholder'>${greetingDialogue}</div>
            <div>Cool: ${coolness}</div>
            <button onclick='drive(1)'>Event Test</button>

            <div id='dialogueOptions'>
            <button onclick='dialogueOption(1)'>${dialogue1}</button>
            <button onclick='dialogueOption(2)'>${dialogue2}</button>
            <button onclick='dialogueOption(3)'>${dialogue3}</button>
            </div>
    </div>
`;
}