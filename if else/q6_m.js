// You have a variable called var num1 with the value as shown:

// var num1 = 300 - 123

// Take one user input and check that number is equal or not.

// If the new user input is equal to num1, console "Equal" else console "Not equal".

let n=require("readline-sync");
let number=n.questionInt("enter your time=");
var num1=300-123;
if (number==num1){
    console.log("is equal")
}
else{
    console.log("not equal")
}