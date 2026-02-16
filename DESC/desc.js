const student = {
    name:"Abhishek",
    age:33,
    address:{
        city:"GZB",
        state:"UP"
    }
}

// const name = student.name;
// const age = student.age;
// console.log(name, age);


// Destructuring
// const{name: stuname, age, address:{city}} = student;
// console.log(stuname , age, city);


function displayStudent({name, age}){
    console.log(`My name is ${name} and age is ${age}`);
}
displayStudent(student);