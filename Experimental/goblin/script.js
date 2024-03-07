// Javascript


// Model
const root = document.getElementById('root');
let attackResult = "";
let goblinHealth = 100;
let unitAttacking = "";
let totalDamage = 0;

const characters = [
    {
        goblin: {
            accuracyRequired: 6,
            defense: { armor: 12, fireResist: 3 }
        },

        human1: {
            name: "Terje",
            accuracy: 8,
            attack: { damage: 20, fire: 10 },
        },

        human2: {
            name: "Per",
            accuracy: 4,
            attack: { damage: 60, fire: 2 },
        }
    }
]


// View
updateView();

function updateView() {
    root.innerHTML = /*HTML*/`
        <div>Goblin health: ${goblinHealth}</div>
        <button onclick='attackEnemy(0)'>Try to attack</button>
        <div>${attackResult}</div>
    `;
}

// Controller

function attackEnemy(index) {
    unit = characters[index];
    terje = unit.human1;
    per = unit.human2; 
    playerAttack(terje);
    playerAttack(per);
    updateView();
}

function playerAttack(unitAttacking) {
    console.log(unitAttacking.name,"is trying to attack the goblin!");
    if (unitAttacking.accuracy >= unit.goblin.accuracyRequired) {attackHit(unitAttacking); }
    else { console.log(unitAttacking.name,"'s attack missed!"); }
}

function attackHit(unitAttacking) {
    console.log(unitAttacking.name,"'s attack hit!")
    calculateDamage(unitAttacking);
    goblinHealth -= totalDamage;
    console.log("He did:",totalDamage,"damage to the goblin!")
};

function calculateDamage(unitAttacking) {
    totalDamage = (unitAttacking.attack.damage - unit.goblin.defense.armor) + (unitAttacking.attack.fire - unit.goblin.defense.fireResist)
    console.log("Calculating damge taken:(",
                unitAttacking.attack.damage,"-",
                unit.goblin.defense.armor,") + (",
                unitAttacking.attack.fire,"-",
                unit.goblin.defense.fireResist,
                ") =",totalDamage)
}