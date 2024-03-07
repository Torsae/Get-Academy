// Model
const root = document.getElementById('root');
let greetingDialogue = "hola";
let dialogue1 = "x";
let dialogue2 = "y";
let dialogue3 = "z";
let currentEvent = null;
let coolness = 10;

// Event ID & information
const events = [
    {
        eventType: "Encounter",
        name: "Jeff",
        greetingDialogue: "My name-a jeff",
        correctResponse: 1,
        requiredCoolness: 50,
        response: {
            positive: { dialogue: "Big boi", coolness: 10 },
            neutral: { dialogue: "It's okay", coolness: 2 },
            negative: { dialogue: "Tiny pp", coolness: -5 }
        }
    },

    {
        eventType: "Encounter",
        name: "Alan",
        greetingDialogue: "STEVE??",
        correctResponse: 3,
        requiredCoolness: 10,
        response: {
            positive: { dialogue: "STEVE IS THAT YOU?", coolness: 10 },
            neutral: { dialogue: "Have you seen STEVE?", coolness: 2 },
            negative: { dialogue: "YOU'RE NOT STEVE!", coolness: -10 }
        }
    },

    // PICKUP OBJECT TEMPLATE, DUPLICATE TO ADD MORE PICKUPS
    { // Add more attributes to pickup objects if needed, example; color
        eventType: "Pickup",
        imagePath: null,
        coolness: 5
    },

    // GAS STATION TEMPLATE
    { // Add more attributes to Gas Station if needed, example; fuelAmount
        eventType: "Gas Station",
        imagePath: null
    },
]
