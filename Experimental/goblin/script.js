// Javascript
// Model
const root = document.getElementById('root');
let attackResult = "";
let goblinHealth = 100;
const characters = [
    {
        name: "Goblin",
        accuracyRequired: 6,
        defense: { armor: 12, fireResist: 3 }
    },
    
    {
        name: "Terje",
        accuracy: 8,
        attack: { damage: 20, fire: 10 },
    },
    
    {
        name: "Per",
        accuracy: 4,
        attack: { damage: 60, fire: 2 },
    }
]

goblin = characters[0];
terje = characters[1];
per = characters[2]; 

// View
updateView();
function updateView() {
    root.innerHTML = /*HTML*/`
        <div>Goblin health: ${goblinHealth}</div>
        <button onclick='tryToAttack(terje)'>Attack with Terje</button>
        <button onclick='tryToAttack(per)'>Attack with Per</button>
        <div>${attackResult}</div>
    `;
}

// Controller
function tryToAttack(playerAttacking) {
    if (playerAttacking.accuracy >= goblin.accuracyRequired) {
        calculateDamage(playerAttacking);
        attackResult = (playerAttacking.name + "'s attack hit!");
    } else {
        attackResult = (playerAttacking.name + "'s attack missed!");
    }
    updateView();
}

function calculateDamage(playerAttacking) {
    totalDamage = (playerAttacking.attack.damage - goblin.defense.armor) + (playerAttacking.attack.fire - goblin.defense.fireResist)
    goblinHealth -= totalDamage;
}