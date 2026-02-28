// It is a "primitive unique value" with an optional description
let baby = Symbol("Maa ka laadla");

// Symbols are always unique even if the description is same
console.log(Symbol("gs") === Symbol("gs")); // False

// Use case:
// Hidden properties, skipped by for..in loop

// Global symbol
// They exist in global registry
// Can be accessed using "key"

let org = Symbol.for("OpenAI");

let company = Symbol.for("OpenAI");

console.log(org === company); // True

console.log(Symbol.keyFor(org));
