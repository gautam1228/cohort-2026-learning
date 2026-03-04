let typeStr = "Interpolated";

console.log(`This is an ${typeStr} string.`);

// An interesting behaviour in String concat

console.log(3 + 3 + "5");

// Increment Decrement Operator
let counter = 0;
counter++;
console.log(counter); //  Outputs 1

console.log(counter++); //  Outputs 1 ( Seems like it should've printed 2 right ? )

console.log(++counter); //  Outputs 3

console.log(typeof []);
console.log(typeof function () {});
console.log(typeof undefined);
console.log(typeof null);

console.log(null === null);
console.log(null == undefined);
console.log(null == NaN);
console.log(null == 0);

console.log(undefined == undefined);
console.log(undefined == NaN);
console.log(undefined == 0);

// For measuring the time it takes to run a piece of code

console.time("For loop time");
for (let i = 0; i < 2000; i++) {
  continue;
}
console.timeEnd("For loop time");
