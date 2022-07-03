let num=require("readline-sync");
let user=num.questionInt("enter the number=");
let i=1;
let c=0;
while (i<=user){
    if (user%i==0){
        c=c+1
    }
    i=i+1
}
if (c==2){
    console.log("it is prime number=",user)
}
else{
    console.log("it is not prime number=",user)
}