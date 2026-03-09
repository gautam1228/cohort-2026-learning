// ======================= BASICS =======================

const hero = {
  name: "Luna the Brave",
  class: "Mage",
  level: 12,
  health: 85,
  mana: 120,
  isAlive: true,
};

hero.weapon = "Fire";

delete hero.level;

const ranger = {
  name: "John the swift",
  agility: 80,
  stealth: undefined,
};

console.log("name" in ranger); // true
console.log("stealth" in ranger); // true

console.log("toString" in ranger); // Output: true ????????? (Prototypal chaining)
console.log(ranger.hasOwnProperty("toString")); // The reliable way to check objects

// ======================= OBJECT - METHODS =======================

const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};

const keys = Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);

console.log(keys);
console.log(values);
console.log(entries);

// With Objects we generally use 'for...of' loops
for (const [key, value] of Object.entries(artifact)) {
  console.log(`${key}: ${value}`);
}

// Creating an object from array of arrays (entries).
const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);

console.log(priceObject);

// Important concept

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase); //  Doesn't allow any changes.

delete displayCase.locked; // Doesn't delete the entry, as the object has been locked.
displayCase.newProp = "test"; // Doesn't add the entry.
displayCase.location = "Hall B, Case 2";

console.log(displayCase);

const catalogEntry = {
  id: "ART-001",
  description: "Ancient Crowns",
  verified: true,
};

Object.seal(catalogEntry); // Allows changes only to exisitng properties, no structural changes.

catalogEntry.description = "Ancient Swords";
console.log(catalogEntry);
