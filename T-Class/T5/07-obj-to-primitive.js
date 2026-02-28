// Conversion ==> number, string
// obj[Symbol.toPrimitive](hint){}

// hint --> "string", "number", "default"

let uni = {
  status: "Generational aura debt",
  aura: -1000,
  // Custom Conversion
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.status;
    }

    return this.aura;
  },
};

console.log(uni);
console.log(String(uni));
console.log(Number(uni));

// hint: string --> toString()
// hint: number --> valueOf()
