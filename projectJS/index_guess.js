let button=document.getElementById('button1');
let outputText=document.getElementById('text');
let number=[Math.floor(Math.random()*100)]
button.addEventListener('click',function(){
    let input=document.getElementById('input1').value;
    if (input==number){
        outputText.innerHTML="you guessed it right"
    }
    else if (input < number){
        outputText.innerHTML="Too low! try again"
    }
    else if (input > number){
        outputText.innerHTML="Too high! try again"
    }
});