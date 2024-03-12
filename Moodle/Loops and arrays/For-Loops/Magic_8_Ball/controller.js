// Javascript
// Controller

function getRandomIndex() {
    let index = lastPickedIndex;
    let index2 = lastPickedAnswer;

    while (index == lastPickedIndex) {
        index = Math.floor(Math.random() * magicBall.length);
        console.log("Generating index");
    }
    lastPickedIndex = index;

    console.log("Set new index:", index);
    
    while (index2 == lastPickedAnswer) {
        index2 = Math.floor(Math.random() * magicBall[index].length);
        console.log("Generating index 2");
    }
    lastPickedAnswer = index2;

    console.log("Set new index 2:", index2);
    
    changeDisplayedAnswer(index, index2);
}

function changeDisplayedAnswer(index, index2) {
    console.log("Fetching answer type:", index, "answer:", index2);
    displayedAnswer = magicBall[index][index2];
    console.log("Answer:", magicBall[index][index2])
    updateView();
}