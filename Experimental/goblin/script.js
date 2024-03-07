// Javascript


// Model
const root = document.getElementById('root');
let attackResult = "";
let goblinHealth = 100;
let totalDamage = 0;

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
        <button onclick='playerAttack(terje)'>Attack with Terje</button>
        <button onclick='playerAttack(per)'>Attack with Per</button>
        <div>${attackResult}</div>
    `;
}

// Controller

function playerAttack(unitAttacking) {
    console.log(unitAttacking.name,"tries to attack the goblin!");
    if (unitAttacking.accuracy >= goblin.accuracyRequired) {
        attackHit(unitAttacking);
        attackResult = (unitAttacking.name + "'s attack hit!");
    } else {
        attackResult = (unitAttacking.name + "'s attack missed!");
        console.log(unitAttacking.name + "'s attack missed!")
    }
    updateView();
}

function attackHit(unitAttacking) {
    console.log(unitAttacking.name,"'s attack hit!")
    calculateDamage(unitAttacking);
    goblinHealth -= totalDamage;
    console.log("He did:",totalDamage,"damage to the goblin!")
}

function calculateDamage(unitAttacking) {
    totalDamage = (unitAttacking.attack.damage - goblin.defense.armor) + (unitAttacking.attack.fire - goblin.defense.fireResist)
    console.log("Calculating damge taken:(",
                unitAttacking.attack.damage,"-",
                goblin.defense.armor,") + (",
                unitAttacking.attack.fire,"-",
                goblin.defense.fireResist,
                ") =",totalDamage)
}