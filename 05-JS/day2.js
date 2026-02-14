// Higher Order Functions

function meraPyaraFunction(udharKaFunction) {
    return udharKaFunction() + 40;
}

function cartoon() {
    return 10;
}
// console.log(meraPyaraFunction(cartoon));


// For each loops

const fruits = ["apple", "banana", "kiwi", "mango"];

fruits.forEach((element) => console.log(element));


// Map loops

const nums = [1, 4, 2, 3, 5];

const result = nums.map((num) => num * 2);
console.log(result);