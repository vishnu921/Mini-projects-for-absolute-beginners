let spinnerEl = document.getElementById('spinner');
let jokeTextEl = document.getElementById('jokeText');
let jokeBtn = document.getElementById('jokeBtn');

function displayJoke(){
    spinnerEl.classList.remove('d-none');
    jokeTextEl.classList.add('d-none');
    
    let url = 'https://apis.ccbp.in/jokes/random';
    let options = {
        method: "GET"
    };
    
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerEl.classList.add('d-none');
        jokeTextEl.classList.remove('d-none');
        let joke = jsonData.value;
        
        jokeTextEl.textContent = joke;
    });
}

jokeBtn.addEventListener('click', displayJoke);