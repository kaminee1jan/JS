let n=require("readline-sync")
let num=n.questionInt("enter the first number=")
let i=1
while (i<=num){
    let j=1
    while (j<=10){
        console.log(i,"*",j,"=",i*j)
        j=j+1
    }
    i=i+1
}
