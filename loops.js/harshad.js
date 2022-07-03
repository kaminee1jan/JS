let num=require("readline-sync");
let user1=num.questionInt("enter the number=");
let n=user1
let sum=0
while (user1>0){
    var a=user1%10
    sum=sum+a
    user1=user1/10 
    user1=Math.floor(user1) 
}
if (n%sum==0){
    console.log(n," is harshad number")
}
else{
    console.log(n,"is not harshad number")
}
