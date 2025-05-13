import "https:/"

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("results-grid");
const messageArea = document.getElementById("message-area");


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if(searchTerm){
        searchProduct(searchTerm);
    }else{
        showMessage("Please enter an Item name");
    }
})