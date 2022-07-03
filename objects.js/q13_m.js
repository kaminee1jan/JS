// Write a programme to find the 3 maximum values of an object and print them.


var my_dict = {'a':50,'b':58,'c':56,'d':40,'e':100,'f':20}
var max=0;
var sec_max=0;
var third_max=0;
for (var i in my_dict){
    if (my_dict[i]>max){
        max=my_dict[i]

    }
}
console.log("max=",max)
for (var j in my_dict){
    if (my_dict[j]<max && my_dict[j]>sec_max){
        sec_max=my_dict[j]
    }
}
console.log("sec_max=",sec_max)
for (var k in my_dict){
    if (my_dict[k]<sec_max && my_dict[k]>third_max){
        third_max=my_dict[k]
    }
}
console.log("third_max=",third_max)