
    let counterElement = document.getElementById('counterValue');

    function setcolor(count){
        if(count > 0){
            counterElement.style.color = "green";
        }
        else if(count < 0){
            counterElement.style.color = "red";
        }
        else{
            counterElement.style.color = "black";
        }
    }
    
    function increase(){
        let count = parseInt(counterElement.innerText);
        count += 1;
        counterElement.innerText = count;
        setcolor(count);
    }
    
    function decrease(){
        let count = parseInt(counterElement.innerText);
        count -= 1;
        counterElement.innerText = count;
        setcolor(count);
    }
    
    function reset(){
        counterElement.innerText = "0";
        setcolor(0);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    