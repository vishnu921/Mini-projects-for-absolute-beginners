let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');
let searchInputEl = document.getElementById('searchInput');
let selectDisplayCountEl = document.getElementById('selectDisplayCount');
let noResultsHeading = document.getElementById('noResultsFoundHeading');
let popularBooksHeading = document.getElementById('popularBooksHeading');

let displayCount = 10;

selectDisplayCountEl.addEventListener('change', function(event) {
    displayCount = parseInt(event.target.value);
});

function createAndAppendBooks(result) {
    //create col-6 div element 
    let bookContainer = document.createElement('div');
    bookContainer.classList.add('col-5', 'col-md-3', 'col-lg-2', 'book-container');
    searchResultsEl.appendChild(bookContainer);

    //create img element 
    let bookImage = document.createElement('img');
    bookImage.setAttribute('src', result.imageLink);
    bookImage.classList.add('w-100');
    bookContainer.appendChild(bookImage);

    //create author name
    let authorName = document.createElement('p');
    authorName.textContent = result.author;
    authorName.classList.add('author-name');
    bookContainer.appendChild(authorName);
}

function displayBooks(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        spinnerEl.classList.toggle('d-none');
        noResultsHeading.classList.add('d-none');
        popularBooksHeading.classList.add('d-none');
        let userInput = event.target.value;
        let url = "https://apis.ccbp.in/book-store?title=" + userInput + "&maxResults=" + displayCount;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                spinnerEl.classList.toggle('d-none');
                if (search_results.length === 0) {
                    noResultsHeading.classList.remove('d-none');
                } else {
                    popularBooksHeading.classList.remove('d-none');
                }
                for (let eachResult of search_results) {
                    createAndAppendBooks(eachResult);
                }
            });

            event.target.value = "";
    }
}

searchInputEl.addEventListener('keydown', displayBooks);