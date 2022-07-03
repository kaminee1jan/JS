// var choice ="overcast";
// var message ="" 
// if (choice === 'sunny') {
//     message = 'It is nice and sunny outside today. \nWear shorts! Go to the beach, or the park, and get an ice cream.'
//  } else if (choice === 'rainy') {
//      message = 'Rain is falling outside; \nTake a rain coat and an umbrella, and don\'t stay out for too long.'
//  } else if (choice === 'snowing') {
//      message = 'The snow is coming down — it is freezing! \nBest to stay in with a cup of hot chocolate, or go build a snowman.'
//  } else if (choice === 'overcast') {
//      message = 'It isn\'t raining, but the sky is grey and gloomy; \nit could turn any minute, so take a rain coat just in case.'
//  } else {
//    message = 'Nothing'
// }
// console.log(message)


var ch =require("readline-sync");
var choice=ch.question("enter the =====");
var message=""
if (choice === 'sunny') {
    message = 'It is nice and sunny outside today. \nWear shorts! Go to the beach, or the park, and get an ice cream.'
    // console.log('It is nice and sunny outside today. \nWear shorts! Go to the beach, or the park, and get an ice cream.')
 } else if (choice === 'rainy') {
     message = 'Rain is falling outside; \nTake a rain coat and an umbrella, and don\'t stay out for too long.'
    // console.log('Rain is falling outside; \nTake a rain coat and an umbrella, and don\'t stay out for too long.')
 } else if (choice === 'snowing') {
     message = 'The snow is coming down — it is freezing! \nBest to stay in with a cup of hot chocolate, or go build a snowman.'
    // console.log('The snow is coming down — it is freezing! \nBest to stay in with a cup of hot chocolate, or go build a snowman.')
 } else if (choice === 'overcast') {
     message = 'It isn\'t raining, but the sky is grey and gloomy; \nit could turn any minute, so take a rain coat just in case.'
    // console.log('It isn\'t raining, but the sky is grey and gloomy; \nit could turn any minute, so take a rain coat just in case.')
 } else {
   message = 'Nothing'
}
console.log(message)