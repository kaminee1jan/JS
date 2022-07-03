var number=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var i=0;
max=0
while (i<number.length){
    if (number[i]>max){
        max=number[i]
    }
    i=i+1
}
console.log("max number=",max)