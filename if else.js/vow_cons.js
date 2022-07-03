var  n=require("readline-sync")
var ch=n.question("enter the ch=")
if (ch=="a" & "e" & "i" & "o" & "u" || ch=="A" & "E" & "I" & "O" & "U"){
    console.log("it is vowel=",ch)
}
else
    console.log("it is consonant=",ch)