function add(n1,n2) {
    return n1 + n2;
}

function subtract(n1,n2) {
    return n1 - n2;
}

function multiply(n1,n2) {
    return n1 * n2;
}

function divide(n1,n2) {
    return n1 / n2;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    let parsedInt = parseInt(n,10);
    return parsedInt;
}

function preserveDecimal(n) {
    let preservedDecimal = parseFloat(n,10);
    return preservedDecimal;
}

console.log(parseFloat("1.1",10))