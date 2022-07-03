// // Defining function

// function displaySum(num1, num2) {
//     var total = num1 + num2;
//     console.log(total);
// }
    
//    // Calling function

// displaySum(6, 20); // 0utputs: 26
// displaySum(-5, 17);
   



// // Defining function

// function showFullname(firstName, lastName) {
//  console.log(firstName + " " + lastName);
// }
 
// Calling function

// showFullname("kittu", "shakya"); 
// showFullname("ayush"); 



// Returning Values from a Function

// Defining function

// function getSum(num1, num2) {
//  var total = num1 + num2;
//  return total;
// }
 
// Displaying returned value

// var result1 = getSum(6, 20);
// console.log(result1) // 0utputs: 26
// var result2 = getSum(-5, 17);
// console.log(result2) // 0utputs: 12



// Understanding the Variable Scope in functions

// Defining function

// function greetWorld() {
//     var greet = "Hello World!";
//     console.log(greet);
// }
// greetWorld(); // Outputs: Hello World!


// var greet = "Hello World!";
// // Defining function
// function greetWorld() {
//   console.log(greet);
// }
// greetWorld();  // Outputs: Hello World!
// console.log(greet)

   
// Function Expressions ( Anonymous function )

// Function Declaration

// function getSum(num1, num2) {
//  var total = num1 + num2;
//  return total;
// }
// console.log(getSum(5,6));


// Function Expression

// var getSum = function(num1, num2) {
//     var total = num1 + num2;
//     return total;
// };
// console.log(getSum(2,3))
   


// var isEqual = function(str1,str2){
//     console.log(str1===str2)
// }
// isEqual("kittu","shakya");


// Self-Invoking Functions ( Immediately invoked function expression)


// (function () {
//     var x = "Hello!! kittu";  // I will invoke myself
//     console.log(x);
// })();
   

// (function(str1,str2){
//     console.log(str1===str2)
// })("shakya","shakya");
 

// Functions Can Be Used as Values
// JavaScript functions can be used as values:

// function myFunction(a, b) {
//  return a * b;
// }
// var x = myFunction(4, 3);
// console.log(x)

