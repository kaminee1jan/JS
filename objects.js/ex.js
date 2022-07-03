// Updating a property
// var myHome={"name":"kittu",
// "location":"etawah"}
// myHome.name="ayush";
// console.log(myHome);

// ADD A NEW PROPERY IN Object

// var myHome={"name":"kittu",
// "location":"etawah"}
// myHome.isGood= true;

// console.log(myHome);


// DELETING PROPERTIES


// var myHome={"name":"kittu",
// "location":"etawah"}
// delete myHome.location;

// console.log(myHome);


// Check property is there or not

// var myDetails={
//     "name":"kittu",
//     "age":19
//  }
//  console.log(myDetails.hasOwnProperty("name"));
 

// Loop over an object


// var cars = ["Maruti", "Mercedes", "BMW"];
// for (car in cars){
// console.log(cars[car]),
// }





// Creating a JavaScript Object

// Create a single object, using an object literal.
// Create a single object, with the keyword new.
// Define an object constructor, and then create objects of the constructed type.
// Create an object using Object.create().


// Using an Object Literal

// const person = {name:"kittu"}
// console.log(person)


// creates an empty JavaScript object


// const person = {};
// person.name = "kittu"
// person.age= 19
// console.log(person);


// Using the JavaScript Keyword new


// const person = new Object();
// person.name = "kittu";
// person.age=19;
// console.log(person);

// const letters = new Set(["a","b","c"]);
// console.log(letters);

// // / Create a Set
// const letters = new Set();

// // Add Values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters);


// // Create a Set
// const letters = new Set(["a","b","c"]);6

// // List all entries
// let text = "";
// letters.forEach (function(value) {
//   text += value;
// })
// console.log(text);

var obj={
    a:20,
    c: function (){
        console.log(a)
        console.log(this.a)
    }
}
