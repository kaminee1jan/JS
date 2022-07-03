// Write a programme to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).


var prompt = require('readline-sync');
var n = prompt.questionInt('How many more times? ');
var d={}
for (let i=1; i<=n; i++){
    d[i]=i**2
}
console.log(d)

