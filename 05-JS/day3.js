
console.warn("Warning: This is a warning !");

// ===================================================
const treasureChest = {
    gold: 100,
    rubies: 50,
    maps: 2
};

treasureChest.gold = 150;

// treasureChest = { gold: 50 }; // Will throw error

const fruits = ["apple", "banana", "mango"];

fruits.push("strawberry");
fruits[0] = "pear";

// fruits = ["chiku"]; //  Will throw error

// ===================================================

console.log(typeof undefined); // undefined
console.log(typeof null); // Not null, this is an object. (This is a bug, one of the quirks of javascript)

function castSpell() {
    console.log("Aabra ka dabra.");
}

console.log(typeof castSpell);


// ===================================================

const originalHp = 100;

let cloneHp = originalHp; // Creates a new place in memory

cloneHp = 80;

console.log(originalHp); // Remains unchanged
console.log(cloneHp);

// ===================================================

const sword = {
    name: "Flame sword",
    owner: "Flame Hashira",
    damage: 75
};

const cloneSword = sword;

cloneSword.damage = 100;

console.log(typeof sword);
console.log(sword); // This is also changed
console.log(cloneSword);

// ===================================================

const armorOriginal = {
    name: "Iron plate",
    defence: 80,
    buff: {
        fire: 10,
    },
};

const armorCopy = { ...armorOriginal }; // This creates a copy which has a new place in memory ( behaves properly only for non-nested objects )
armorCopy.buff.fire = 80; // This changes the original armor as well

// For proper copying

const potionOriginal = {
    name: "Health Potion",
    effects: {
        heal: 40,
        mana: 30
    }
};

const potionCopy = structuredClone(potionOriginal); // Creates a proper copy

// ===================================================

