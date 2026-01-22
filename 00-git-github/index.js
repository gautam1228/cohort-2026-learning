console.log("Hello git !")

function subtract(a, b) {
    if( !(a > b) ) throw new Error("Number a should be greater than b.")
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

multiply(2, 3)
multiply(20, 3)
multiply(31, 32)
