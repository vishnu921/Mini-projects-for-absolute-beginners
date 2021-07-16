let stopbutton = document.getElementById('stopButton');
let stoplight = document.getElementById('stopLight');
let readybutton = document.getElementById('readyButton');
let readylight = document.getElementById('readyLight');
let gobutton = document.getElementById('goButton');
let golight = document.getElementById('goLight');

function stop(){
    stopbutton.style.backgroundColor = "#cf1124";
    stoplight.style.backgroundColor = "#cf1124";
    gobutton.style.backgroundColor = "#4b5069";
    golight.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "#4b5069";
    readylight.style.backgroundColor = "#4b5069";
}

function ready(){
    readybutton.style.backgroundColor = "#f7c948";
    readylight.style.backgroundColor = "#f7c948";
    stopbutton.style.backgroundColor = "#4b5069";
    stoplight.style.backgroundColor = "#4b5069";
    gobutton.style.backgroundColor = "#4b5069";
    golight.style.backgroundColor = "#4b5069";
}

function go(){
    gobutton.style.backgroundColor = "#199473";
    golight.style.backgroundColor = "#199473";
    stopbutton.style.backgroundColor = "#4b5069";
    stoplight.style.backgroundColor = "#4b5069";
    readybutton.style.backgroundColor = "#4b5069";
    readylight.style.backgroundColor = "#4b5069";
}