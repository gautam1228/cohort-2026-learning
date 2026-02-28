// const dogesh = {
//   name: "Husky",
//   dance: function () {
//     console.log("Dance monkey dance");
//   },
// };

// dogesh.dance();

// Method-Shorthand
const dogesh = {
  name: "Husky",
  dance() {
    console.log("Dance monkey dance");
  },
};

let user = {
  name: "Gautam Singh",
  age: 22,
  college: "IIITD",
  passout: 2026,
  intro() {
    console.log(`Hi, my name is ${this.name}.`);
    console.log(`I am ${this.name} years old.`);
    console.log(
      `I am studying at ${this.college} and will pass out in ${this.passout}.`,
    );
  },
};

user.intro();

let gautam = user;
user = null;

gautam.intro();

// 'this' keyword --> it changes itself according to it's environment
