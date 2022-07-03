// Take user input in a variable named varx.
// Check if this number is divisible by 2.
// Console that number is divisible by 2 or not
// If number is divisible by 2 console 2 se “divisible hai” else “not divisible”
var num=require("readline-sync");
var number=num.questionInt("enter the number=");
if (number%2==0){
    console.log("it's divisble by 2 =",number)
}
else{
    console.log("not divisible by 2=",number)
}


