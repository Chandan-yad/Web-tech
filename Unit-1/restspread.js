// rest operator ...

function add(...numbers){
    let total = 0;
    for(let i=0;i<numbers.length;i++){
        total = total + numbers[i];
    }
    return total;
}
console.log(add(1,2,3,4,5));



function add(...numbers){
    let total = 0;
    for(let i in numbers){
        total = total + numbers[i];
    }
    return total;
}
console.log(add(1,2,3,4,5));




function add(...numbers){
    let total = 0;
    for(let i of numbers){
        total = total + i;
    }
    return total;
}
console.log(add(1,2,3,4,5));




let a = [1,2,3,34,45,88];
let[first, sec, ...last] = a;
console.log(first, sec, ...last);


