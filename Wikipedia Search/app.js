let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');
// url = "https://apis.ccbp.in/wiki-search?search=" + input

function createAndAppendSearchResult(result){
    //create result item
    let resultItemEl = document.createElement('div');
    resultItemEl.classList.add('result-item');
    searchResultsEl.appendChild(resultItemEl);
    
    //create Title element
    let { link, title,description } = result;
    let titleEl = document.createElement('a');
    titleEl.href = link;
    titleEl.target = '_blank';
    titleEl.textContent = title;
    titleEl.classList.add('result-title');
    resultItemEl.appendChild(titleEl);
    
    //create Break element
    let titleBreakEl = document.createElement('br');
    resultItemEl.appendChild(titleBreakEl);
    
    //create URL element
    let urlEl = document.createElement('a');
    urlEl.classList.add('result-url');
    urlEl.href = link;
    urlEl.target = '_blank';
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);
    
    //create Break element
    let linkBreakEl = document.createElement('br');
    resultItemEl.appendChild(linkBreakEl);
    
    //create Description element
    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add('result-description');
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
}

function displayResults(search_results){
    spinnerEl.classList.toggle('d-none');
    for(let eachResult of search_results){
        createAndAppendSearchResult(eachResult);
    }
}

function wikipediaSearch(event){
    if(event.key === "Enter"){
        spinnerEl.classList.toggle('d-none');
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results} = jsonData;
            displayResults(search_results);
        });
    }
}

searchInputEl.addEventListener("keydown", wikipediaSearch);