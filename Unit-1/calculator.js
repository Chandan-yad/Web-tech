// Write a javascript program that creates

const calculator = () => ({
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => (b==0 ? "Error" : a / b),
});

console.log(calculator().add(11, 5));
console.log(calculator().sub(10, 5));
console.log(calculator().mul(10, 5));
console.log(calculator().div(10, 0));

// write a js program using  a factory function calculator() that returns methods add, sub, mul, div. Use a switch based 


