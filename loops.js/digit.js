let num=require("readline-sync")
let n=num.questionInt("enter the number=")
let digit=0
let sum=0
while (n>0){
    digit=n%10
    sum=sum+digit
    n=n/10
    n=Math.floor(n)
}
console.log("digit of sum=",sum)