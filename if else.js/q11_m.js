// Take two numbers as input from the user. Console the number which is greater.

let num=require("readline-sync");
var number1=num.questionInt("enter the first number=");
var number2=num.questionInt("enter the second number=");
if (number1 >number2){
    console .log("number1 is greater=",number1)
}
else{
    console.log("number2 is greater=",number2)
}