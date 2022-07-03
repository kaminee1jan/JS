var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd_numbers=0;
var sum_odd_numbers=0;
var sum_even_numbers=0;
var count_even_numbers=0;
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i;
       count_even_numbers+=1;
   }
   else{
       sum_odd_numbers+=i;
       count_odd_numbers+=1;
   }
}
console.log(("both average=",sum_even_numbers+sum_odd_numbers)/2);
console.log("count odd number=",count_odd_numbers);
console.log("count even number=",count_even_numbers);
console.log("sum odd number=",sum_odd_numbers);
console.log("sum even number=",sum_even_numbers);