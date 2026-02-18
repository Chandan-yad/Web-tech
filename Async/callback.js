// function aa(){
//     console.log("First");
// }

// setTimeout(aa,2000);

// Set Interval

// setInterval(() => {
//     console.log("First");
// }, 2000);


let count = 0;
let id = setInterval(() => {
    console.log("First");
    count++;
    if(count === 5){
        clearInterval(id);
    }
}, 1000);

