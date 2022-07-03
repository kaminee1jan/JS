var number=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var i=0;
max=0;
sec_max=0;
while (i<number.length){
    if (number[i]>max){
        max=number[i]
    }
    else if (sec_max<number[i] && max>number[i]){
        sec_max=number[i]
    }
    
    i=i+1
}
console.log("max number=",max)
console.log("sec_max number=",sec_max)
