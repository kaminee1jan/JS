// let n=require("readline-sync");
// let num=parseInt(n.question("enter number: "));
// for (let i=1;i<=10;i++) {
//        multi=num*i;
//        console.log(num + " *" + i + "=" + multi)
//    }

let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
i=1
while (i<=10){
    multi=num*i
    console.log(num+"*"+i+"="+multi)
    i=i+1
}