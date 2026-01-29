// (function showuser(){
//     console.log("Welcome to CSB");
// })();// imediatory invoke fuction


// (() => {
//     console.log("Welcome to CSB");
// })();


// const aa = () => {
//     console.log("Welcome to CSB");
// };
// aa();



function person (){
    this.age = 25;

    setTimeout(function(){
        console.log(this.age);
    }, 1000);
}
new person();


function person (){
    this.age = 25;

    setTimeout( ()=> {
        console.log(this.age);
    }, 1000);
}
new person();