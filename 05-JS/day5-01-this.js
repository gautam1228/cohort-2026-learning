console.log(this);

function ranveerOnGlobalStage() {
    return typeof this;
}

console.log(ranveerOnGlobalStage());

function ranveerWithNoScript() {
    // "use strict" // If we add this line then this fn returns undefined

    return this;
} // Returns the global object.

console.log(ranveerWithNoScript());

const bollyWoodFilm = {
    name: "Bajirao Mastani",
    lead: "Ranveer",
    introduce() {
        return `${this.lead} performs in ${this.name}`;
    },
};

console.log(bollyWoodFilm.introduce());

const filmSet = {
    crew: "Spot Boys",
    prepareProps() {
        console.log(`Outer this.crew: ${this.crew}`);

        function arrangeChairs() {
            console.log(`Inner this.crew: ${this.crew}`);
        }
        arrangeChairs();

        // Usually it's said that arrow fn's don't have this (this code shows quite the opposite)
        // reality: they borrow this from the outer scope (In this case: perpareProps())
        const arrangeLights = () => {
            console.log(`Arrow this.crew: ${this.crew}`);
        };
        arrangeLights();
    },
};

filmSet.prepareProps();

// Detached functions

const actor = {
    name: "Ranveer Singh",
    bow() {
        return `${this.name} takes a bow.`;
    },
};

const detachedBow = actor.bow;
console.log(detachedBow());