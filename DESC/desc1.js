let numbers = [10,20, 30];
let [a,b,c] = numbers;

console.log(a);
console.log(b);
console.log(c);


let p = 5;
let q = 10;
[p,q] = [q,p];

console.log(p);
console.log(q);

let colors = ["red","green", "blue"];
let[,,secondColor] = colors;

console.log(secondColor);