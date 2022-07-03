let num=require("readline-sync")
let n=num.questionInt("enter the number=")
let i=1
let sum=0
while (i<n){
    if (n%i==0){
        sum=sum+i
    }
    i=i+1
}
if (sum==n){
    console.log("it is perfect number=",n)
}
else{
    console.log("it is not perfect number=",n)
}