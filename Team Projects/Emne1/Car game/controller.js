// Controller

// RNG System
function drive() {
    setTimeout(() => {
        generateEvent();
    }, 1000);
    console.log("eventTimer();")
}

function generateEvent() {
    let newEventID = 0;
    newEventID = Math.floor(Math.random() * events.length);
    startEvent(newEventID);

    console.log("Set eventID to:", newEventID)
}

function startEvent(eventIndex) {
    currentEvent = events[eventIndex];
    if (currentEvent.eventType == "Encounter") {
        runEncounter();
    }
    else if (currentEvent.eventType == "Pickup") {
        runPickup();
    }
    else if (currentEvent.eventType == "Gas Station") {
        runGasStation();
    }

    //test shit
    console.log("startEvent(", eventIndex, ");")
}

function runEncounter() {
    console.log(currentEvent);
    // print greeting dialogue
    greetingDialogue = currentEvent.greetingDialogue;
    // give dialogue options
    dialogue1 = "Hello";
    dialogue2 = "Sup";
    dialogue3 = "Turd";
    updateView();
    // NEEDS TO HAPPEN AFTER updateView();
    // Unhides buttons
    document.getElementById("dialogueOptions").style.display = "block";
}

function dialogueOption(chosenOption) { 
    console.log("DialogueOptions")
    console.log(currentEvent)
    if (currentEvent.eventType == "Encounter") {
        resolveEncounter(chosenOption);
    }
}

function resolveEncounter(chosenOption) {
    console.log("resolveEnctouner")
    if(chosenOption == currentEvent.correctResponse) {
        console.log("Positive")
        // Print positive response
        // UPDATE WITH COOLNESS CHECK
        greetingDialogue = currentEvent.response.positive.dialogue;
        // Update coolness
        coolness += currentEvent.response.positive.coolness
    }
    
    if(chosenOption !== currentEvent.correctResponse) {
        // Print positive response
        // UPDATE WITH COOLNESS CHECK
        greetingDialogue = currentEvent.response.negative.dialogue;
        // Update coolness
        coolness += currentEvent.response.negative.coolness
    }
    
    if( /*NEUTRAL WHATEVER*/ false) {
        // Print neutral response
        // UPDATE WITH COOLNESS CHECK
        greetingDialogue = currentEvent.response.neutral.dialogue;
        // Update coolness
        coolness += currentEvent.response.neutral.coolness
    }
    updateView();
}

function runPickup() {

}

function runGasStation() {

}