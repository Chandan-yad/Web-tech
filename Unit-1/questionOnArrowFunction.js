let isEven = (num) => {
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(isEven(5));



let reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));




let avgMarks = (marks) => {
    if(marks >= 40){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
console.log(avgMarks(45));