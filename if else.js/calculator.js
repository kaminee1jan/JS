var n=require("readline-sync")
var num1=n.questionInt("enter the first number=")
var symble=n.question("enter the operator=")
var num2=n.questionInt("enter the second number=")
if (symble=="+"){
    console.log("addition=",num1+num2)
}
else if(symble=="-"){
    console.log("subtract=",num1-num2)
}
else if(symble=="*"){
    console.log("multiple=",num1*num2)
}
else if(symble=="**"){
    console.log("exponentiation",num1**num2)
}
else if(symble=="/"){
    console.log("division=",num1/num2)
}
else if(symble=="%"){
    console.log("reminder=",num1%num2)
}
else{
    console.log("invailed")
}