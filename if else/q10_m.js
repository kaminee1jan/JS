// Take two numbers as input from the user in variables varx and vary.
// Check whether varx is divisible by vary.
// If yes, console Divisible else console Not Divisible.

let num= require("readline-sync");
var varX=num.questionInt("enter a number=");
var vary=num.questionInt("enter a number=");
if (varX%vary==0){
    console.log("yes")
}
else{
    console.log("no")
}

