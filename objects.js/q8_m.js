// Take two lists and make an object, 1st list elements be as keys, and 2nd lists elements as values.


var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5]
var n={}
for (let i in list2){
   n[list1[i]]=list2[i]
}
console.log(n);