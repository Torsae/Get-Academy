// Javascript
// Controller

function getRandomIndex() {
    let index = lastPickedIndex;

    while (index == lastPickedIndex) {
        index = Math.floor(Math.random() * magicBall.length);
        console.log("Generating index");
    }
    lastPickedIndex = index;

    console.log("Set new index:", index);
    
    changeDisplayedAnswer(index, index2);
}

function changeDisplayedAnswer(index) {
    console.log("Fetching answer:", index);
    console.log("Answer:", magicBall[index])
    displayedAnswer = magicBall[index];
    updateView();
}