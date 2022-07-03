// ake 10 student inputs and marks and save them in an object.


var readline = require('readline-sync');
var students={}
for (let step=1; step<=10; step++){
   var name =readline.question("Enter your name:=");
   var marks=readline.questionInt("Enter the marks:=");
   students[name]=marks;
}
console.log(students);