// Javascript
// Controller

function getRandomIndex() {
    let index = lastPickedIndex;
    let index2 = lastPickedAnswer;
    console.log("lastPickedIndex:", lastPickedIndex);
    console.log("lastPickedAnswer:", lastPickedAnswer);

    while (index == lastPickedIndex) {
        index = Math.floor(Math.random() * magicBall.length);
        console.log("Generating index");
    }
    lastPickedIndex = index;
    console.log("Set new index:", index);
    
    while (index2 == lastPickedAnswer) {
        index2 = Math.floor(Math.random() * magicBall[index].answers.length);
        console.log("Generating index 2");
    }
    lastPickedAnswer = index2;
    console.log("Set new index 2:", index2);
    
    changeDisplayedAnswer(index, index2);
}

function changeDisplayedAnswer(index, index2) {
    console.log("changeDisplayedAnswer(","index:", index, "index2:", index2,")");
    displayedAnswer = magicBall[index].answers[index2].result;
    console.log("Answer:", magicBall[index].answers[index2].result);
    updateView();
}