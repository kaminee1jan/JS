let num=require("readline-sync")
let n=num.questionInt("enter the number=")
let i=1
while (n>0){
    i=i*(n%10)
    n=n/10
    n=Math.floor(n)
}
console.log("it is product number=",i)

