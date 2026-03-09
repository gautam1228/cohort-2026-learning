const aadhar_of_gautam = Symbol("aadhar");
const aadhar_of_cooper = Symbol("aadhar");

console.log(typeof aadhar_of_gautam);
console.log(aadhar_of_gautam === aadhar_of_cooper);

console.log(aadhar_of_gautam.toString());
console.log(aadhar_of_gautam.description);

const biometricHash = Symbol("Biometric Hash");
const bloodGroup = Symbol("Blood Group");

const citizenRecord = {
    name: "Gautam Singh",
    age: 22,
    [biometricHash]: "oih9eo789ihsb",
    [bloodGroup]: "O-",
};

console.log(Object.keys(citizenRecord));

console.log(Object.getOwnPropertySymbols(citizenRecord));


// ------------------------ Use Cases ------------------------

const rtiQueryBook = {
    queries: [
        "Infra Budget",
        "Ration Card",
        "Education Budget",
        "Startup Laws",
    ],
    [Symbol.iterator]() {
        let index = 0;
        const queries = this.queries;
        return {
            next() {
                if (index < queries.length) {
                    return { value: queries[index++], done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
};

for (const query of rtiQueryBook) {
    console.log(`Filing RTI for: ${query}`);
}

const governmentScheme = {
    name: "PM Kisan Yojana",
    people: 54,
    [Symbol.toPrimitive](hint){
        if(hint === "string") return this.name;
        else if (hint === "number") return this.people;
    }
}

console.log(+governmentScheme); // Object conversion to number
console.log(`${governmentScheme}`); // Object conversion to string