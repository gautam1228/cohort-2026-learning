const prithviRaj = {
    name: "Prithviraj",
    generation: "Grandfather",
    cookTraditionalDish() {
        return `${this.name} cooks an ancient family recipe.`;
    },
};

const raj = Object.create(prithviRaj);
console.log(raj);

raj.name = "Raj";
raj.generation = "father";

raj.runBusiness = function () {
    return `${this.name} runs the family business.`
}

console.log(raj);
console.log(raj.runBusiness());
console.log(raj.cookTraditionalDish()); // Inherited

// An example usage of bind here
// const rajFunc = raj.runBusiness.bind(raj);
// console.log(rajFunc());

Array.prototype.last = function () {
    return this[this.length - 1];
}

// =============================== Polyfills ===============================

console.log([1, 2, 3].last());
console.log(["gautam", "cooper", "singh"].last());

Array.prototype.mapTwo = function () {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(this[i] * 2);
    }
    return newArr;

    // return this.map((element) => element * 2); // Easy way
}

console.log([1, 2, 3].mapTwo());
