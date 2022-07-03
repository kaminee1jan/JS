var n=require("readline-sync")
var post=n.question("enter the post_name=")
var name=n.question("enter the name=")
if (post=="disco"){
    if (name=="deepa"){
        console.log("sechadule")
    }
    else{
        console.log("name is not correct")
    }
}
else if(post=="outreach"){
    if (name=="priya"){
        console.log("media")
    }
    else{
        console.log("name is not correct")
    }
}
else if(post=="fc"){
    if (name=="anjali"){
        console.log("provide=food")
    }
    else{
        console.log("name is not correct")
    }
}
else{
    console.log("invailde")
}