// Javascript
// Model
const root = document.getElementById('root');
let displayedAnswer = 0;
let lastPickedIndex = -1;
let lastPickedAnswer = -1;

const magicBall = [
    //first random index to choose which type of answer
    {
        type: "Affirmative",
        // send 2nd random index value (different from first), in here
        // to get random "affirmative" answer, but keep calls modular (ala, magicBall.answers.result)
        answers: [
            { result: "It is certain" },
            { result: "It is decidedly so" },
            { result: "Without a doubt" },
            { result: "Yes definitely" },
            { result: "You may rely on it" },
        ],
    },

    {
        type: "Non-Committal",
        answers: [
            { result: "Reply hazy, try again" },
            { result: "Ask again later" },
            { result: "Better not tell you now" },
            { result: "Cannot predict now" },
            { result: "Concentrate and ask again" },
        ],
    },

    {
        type: "Negative",
        answers: [
            { result: "Don't count on it" },
            { result: "My reply is no" },
            { result: "My sources say no" },
            { result: "Outlook not so good" },
            { result: "Very doubtful" },
        ],
    },

    {
        type: "Affirmative",
        answers: [
            { result: "As I see it, yes" },
            { result: "Most likely" },
            { result: "Outlook good" },
            { result: "Yes" },
            { result: "Signs point to yes" },
        ],
    },

];