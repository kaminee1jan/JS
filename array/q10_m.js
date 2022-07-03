let number=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var reversedArray=[]
// for(var i=numbers.length-1; i>=0;i--){
//    reversedArray.push(numbers[i])
// }
// console.log(reversedArray);
let i=number.length-1
let r_array=[]
while (i>=0){
        r_array.push(number[i])
      
        i--
}
console.log("reverse=",r_array)
