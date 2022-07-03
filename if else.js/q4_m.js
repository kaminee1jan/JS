var t=require("readline-sync");
var time=t.questionInt("enter your time=");
if (time >= 5 && time <= 6) {
 console.log("sleep well");
}
if (time >= 6 && time <= 7) {
 console.log("Morning Exercise");
}
if(time > 7 && time < 8.30){
 console.log("Break+Breakfast");
}
if ( time > 8.30 && time < 12){
 console.log("Study");
}