class Cricketer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100;
    }

    introduce() {
        return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`
    }
}
// Note: Classes are just syntactic sugar, in the end they are just functions

const player1 = new Cricketer("Dhoni", "WK & Batsman");
const player2 = new Cricketer("Bumrah", "Bowler");

console.log(player1.introduce());

// const introduce2 = player2.introduce;
// console.log(introduce2()); // Will give an error, since this is a detached function

// ---------------- Using bind ----------------
const introduce2 = player2.introduce.bind(player2);
console.log("Bind: ", introduce2());

// ---------------- Using call ----------------
// const introduce2 = player2.introduce;
// console.log("Call: ", introduce2.call(player2));

// ---------------- Using apply ----------------
// const introduce2 = player2.introduce.bind(player2);
// console.log("Apply: ", introduce2.apply(player2));


console.log(player1.hasOwnProperty("name"));
console.log(typeof Cricketer); // Not what one might think

class Debutant {
    constructor(name) {
        this.name = name;
        this.walkout = () => `${this.name} walks out to bat for the first time.`
    }
}

const debutant1 = new Debutant("Shubhman");
const walkoutFunc = debutant1.walkout;
console.log(walkoutFunc());

const debutant2 = new Debutant("Rinku");

console.log(debutant1.walkout === debutant2.walkout);
