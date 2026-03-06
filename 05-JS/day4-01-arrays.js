// ======================= BASICS =======================

console.log(typeof []); // Type is object
console.log(Array.from("John Doe")); // Breaks the argument into individual characters. (Should be iterable)
console.log(Array.of("John Doe")); // Treats the argument as a single item of the array

// Key points to remember about arrays
// 1. Defined using: [] or Array(_)
// 2. Start with indexing of 0.
// 3. Mutating methods: push, pop, shift, unshift, splice
// 4. Non Mutating methods: concat, slice, flat, flatmap
// 5. Searching: includes, index, indexOf
// 6. Array.isArray()

// ======================= ARRAY - METHODS =======================

const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dargon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
]; // Array of objects

// forEach() // Note: Only works with synchronous functions
const myData = orders.forEach((order, index) => {
    console.log(` #${index + 1} : ${order.qty} x ${order.dish}`);
});

console.log(myData); // By default forEach doesn't return anything

// map()
const receiptLines = orders.map((o) => `${o.dish}: ${o.price * o.qty}`);

console.log("Map Output: ", receiptLines);

// filter()
const spicyOrders = orders.filter((order) => order.spicy);
console.log(spicyOrders);

// reduce()
const totalRevenue = orders.reduce((sum, order) => {
    return sum + order.qty * order.price;
}, 0);

console.log(totalRevenue);

const grouped = orders.reduce(
    (acc, order) => {
        const category = order.spicy ? "spicy" : "mild";

        acc[category].push(order.dish);
        return acc;
    },
    { spicy: [], mild: [] },
);

console.log(grouped);

const groupedPrice = orders.reduce(
    (acc, order) => {
        const priceRange = order.price > 11 ? "expensive" : "cheap";
        acc[priceRange].push(order.dish);
        return acc
    }, { expensive: [], cheap: [] }
);

console.log(groupedPrice);


// sort()
// Note: By default it sorts strings alphabetically

const nums = [3, 28, 13, 247, 68];
console.log(nums.sort()); // Shows weird behaviour

// For numbers:
const sorted = nums.sort((a, b) => a - b);
console.log(sorted);
