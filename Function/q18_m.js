// Write a function named showNumbers() which takes 1 argument named limit and program starts from o to limit and checks the numbers in between 0 to limit and prints whether the number is Even or odd like the below


function showNumbers(limit){
    for(i=1;i<=limit;i++){
        if(i%2 ===0){
            console.log(i," - Even");
        }
        else{
            console.log(i," - Odd");
        }
    }
}
let l=require("readline-sync")
let limit=l.questionInt("enter the number=")
showNumbers(limit);