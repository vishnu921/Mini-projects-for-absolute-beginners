let quoteInputEl = document.getElementById('quoteInput');
let quoteDisplayEl = document.getElementById('quoteDisplay');
let resultEl = document.getElementById('result');
let submitBtnEl = document.getElementById('submitBtn');
let resetBtnEl = document.getElementById('resetBtn');
let timerEl = document.getElementById('timer');
let spinnerEl = document.getElementById('spinner');
let speedTypingTestEl = document.getElementById('speedTypingTest');
let quote = "";
let timerId = null;
let time = 0;

function startTypingTest(){
    spinnerEl.classList.add('d-none');
    speedTypingTestEl.classList.remove('d-none');
    quoteDisplayEl.textContent = quote;
    time = 0;
    timerId = setInterval(function(){
        time += 1;
        timerEl.textContent = time;
    }, 1000);
    
}

function resetTest(){
    spinnerEl.classList.remove('d-none');
    speedTypingTest.classList.add('d-none');
    quoteInputEl.value = "";
    resultEl.textContent = "";
   
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        quote = jsonData.content;
        startTypingTest();
    })
}

function submitAndDisplayResult(){
    let typedText = quoteInputEl.value;
    if(typedText === quote){
        clearInterval(timerId);
        resultEl.textContent = `You typed in ${time} seconds`;
    } else{
        resultEl.textContent = "You typed incorrect sentence";
    }
}

resetTest();
submitBtnEl.addEventListener('click', submitAndDisplayResult);
resetBtn.addEventListener('click', resetTest);