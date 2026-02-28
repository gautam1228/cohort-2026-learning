// It is mostly used with constructor functions

// Constructor functions:
// 1. Capital letters: [String, Object, Array, Number]
// 2. Should be executed by "new" operator

function User(name) {
  this.name = name;
  this.isPaid = false;
}

const gs = new User("Gautam");
console.log(gs);

// What 'new' does:
// 1. this = {}
// 2. operations
// 3. return this
