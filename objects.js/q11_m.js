// You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and store them in an object in key, value pairs.


const list1=[]
const word="MISSISSIPPI"
let d={}
for (var i  of word){
    if (list1.includes(i)){
        d[i]=d[i]+1
    }
    else{
        list1.push(i)
        d[i]=1;
    }
}
console.log(d)