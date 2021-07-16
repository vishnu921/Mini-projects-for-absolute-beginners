
let gameResult = document.getElementById('gameResult');
let userInput = document.getElementById('userInput');

//Math.ceil(number) returns smallest greater integer than number if number is a floating point number
//else if number is an integer it returs same integer
//Math.random() returns a random real number in range [0,1)
let randomNumber = Math.ceil(Math.random()*10);

function checkGuess(){
    let input = parseInt(userInput.value);

    if(input === randomNumber){
        gameResult.style.backgroundColor = "green";
        gameResult.textContent = "Congratulations You WON";
    }
    else if(input > randomNumber){
        gameResult.style.backgroundColor = "1e217c";
        gameResult.textContent = "Too high try lesser values";
    }
    else if(input < randomNumber){
        gameResult.style.backgroundColor = "1e217c";
        gameResult.textContent = "Too low try greater values";
    }
    else{
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.textContent = "Insert valid input";
    }
}