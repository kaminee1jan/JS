// Write a function named perfect() which takes 1 parameter and checks that given parameter is a perfect number or not. Perfect number means we will count the factors of a given number including 1 but you need to exclude the own number as its factor.

// If it is a perfect number prints num is a perfect number hai or else prints num is not a perfect number hain.

function perfect(num){
    var i=0;
    var sum=0;
    while (i<num){
        if (num%i==0){
            sum=sum+i
        }
        i=i+1
    }
    if (sum==num){
        console.log("it is perfect number=",num)
    }
    else{
        console.log("it is not perfect number=",num)
    }
}
let n=require("readline-sync")
let num=n.questionInt("enter the number=")
perfect(num)

