// num= require("readline-sync");
// var a=num.questionInt("enter a number=");
// var b=num.questionInt("enter a number=");
// var c=num.questionInt("enter a number=");
// if (a>=b & a>=c){
//     console.log(a,"a greater")
// }
// else if(b>=a & b>=c){
//     console.log(b,"b greater")
// }
// else{
//     console.log(c,"c greater")
// }


var n=require("readline-sync")
var x=n.questionInt("enter the number=")
var y=n.question("enter the number=")
if (x==y){
  console.log("it is true")
}
else if(x===y){
  console.log("it is fale")
}
else{
  console.log("invailed")
}

