// Write a function named eligibleforvote which takes age as a parameter and prints if he/she is eligible to vote or not. ( Consider minimum age of voting to be 18. )
// 
// Example:
// 
// If a user given age as less than 18 prints “not eligible “ or else if a user enters 18 or more than 18 prints “you are eligible”.//



function eligibleforvote(age){
    if (age<18){
        console.log("he/she not eligible")
    }
    if (age>=18){
        console.log("he/she you are eligible")
    }
    else{
        console.log("invailed")
    }
}
let a=require("readline-sync")
let age=a.questionInt("enter the age=")
eligibleforvote(age)