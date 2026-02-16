const p = new Promise((resolve, reject) => {
  resolve("sab theek hai");
  reject("Big Block error");
});

p.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log("error hai", error);
});

// console.log("1) Start");

// const p = new Promise((resolve, reject) => {
//   console.log("2) Promise created ");
//   setTimeout(() => {
//     resolve("3) Work finished");
//   }, 3000);
// });
// console.log("4) After creating promise");

// p.then((value) => {
//   console.log(value); // runs AFTER resolve(...)
//   console.log("5) then() runs only when promise is resolved");
// });

// console.log("6) End (JS keeps running; then will run later)");