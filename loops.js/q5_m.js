let n=require("readline-sync");
var name=n.question("enter name: ")
// let name=["nitin"]
let store=name;
var string=""
for  (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string=",store)
}
else {
   console.log("it's not a palindrome string=",store)

}