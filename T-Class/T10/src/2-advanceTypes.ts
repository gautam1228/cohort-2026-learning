// Type aliases

type Team = {
    name: string;
    getSquad: () => string[];
    price: string | number;    // Type union
    isUseless: boolean;
};

let rcb: Team = {
    name: "RCB",
    getSquad() {
        return ["Kohli", "Gayle"];
    },
    price: "Rs. 150",
    isUseless: true,
};

// Nullish Coalescing Operator ??
// Fall back to a default value when dealing with null/undefined objects

let speed: number | null = null;

let ride = {
    // speed: ((speed !== null) || (speed !== undefined)) ? speed : 49,
    speed: speed ?? 49,
};

console.log(ride.speed);
