function TataCar(chasisNumber, modelName) {
    this.chasisNumber = chasisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}

TataCar.prototype.status = function () {
    return `Tata ${this.modelName} #${this.chasisNumber} | Fuel: ${this.fuelLevel}`;
};

const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");

console.log(car1.status());
console.log(car2.status());

// Steps that happen when using the 'new' keyword:
// Step 1: create an empty object '{}'
// Step 2: Linking the prototype of empty object with the prototype of the TataCar (in this case).
// Step 3: bind 'this' to the new object (this binding)
// Step 4: explicit return of the object

// Factory functions
function createAutoRickshaw(id, route) {
    return {
        id,
        route,
        run() {
            return `Auto ${this.id} is running on ${this.route}.`;
        },
    };
}

// These objects carry the reference of all the variables within them.
// Whereas when using the 'new' keyword, it stores the reference at one place (the Class); but every object's 'this' is still different
const auto1 = createAutoRickshaw(1, "Delhi - Kanpur");
const auto2 = createAutoRickshaw(2, "Pune - Mumbai");

console.log(auto1.run());
console.log(auto2.run());
