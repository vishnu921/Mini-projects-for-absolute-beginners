let timer = document.getElementById('timer');
let defuserEl = document.getElementById('defuser');
let imageEl = document.getElementById('mainImage');

let count = 10;
let timerId = setInterval(function(){
    count -= 1;
    timer.textContent = count;
    timer.classList.toggle('color-red');
    if(count === 0){
        timer.textContent = "You failed to Defuse!";
        imageEl.setAttribute('src', 'boom.png');
        clearInterval(timerId);
    }
},1000);

defuserEl.addEventListener('keydown', function(event){
    let defuserText = defuserEl.value;
    if(event.key === "Enter" && defuserText === "defuse" && count !== 0){
        clearTimeout(timerId);
        timer.textContent = "Congrats you defused the bomb!";
    }
    defuserEl.value = "";
});
