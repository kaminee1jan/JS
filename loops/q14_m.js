let n=1;
let i=5;
str=""
while (i>=n){
    let j=5;
    while (j>=n){
        str+=i;
        j=j-1
    }
    str+="\n";
    i=i-1
}
console.log(str)


// let n=1; 
// let string="";
// for (let i=5; i>=n; i--) {
//   for (let j=5; j>=n; j--) {
//     string+=i;
//   }
//   string+="\n";
// }
// console.log(string);