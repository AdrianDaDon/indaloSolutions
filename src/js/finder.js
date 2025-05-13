const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("results-grid");
const messageArea = document.getElementById("message-area");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    searchProduct(searchTerm);
  } else {
    showMessage("Please enter an Item name", true);
  }
});

async function searchProduct(query) {
  showMessage(`Searching for "${query}..."`, false, true);
  const dataset = await fetch("./assets/ingredients.json")
    .then((data) => console.log(data.json()))
    .catch((error) => console.log("Error message: ", error));
}

function showMessage(message, isError = false, isLoading = false) {
  messageArea.textContent = message;

  if (isError) messageArea.classList.add("error");
  if (isLoading) messageArea.classList.add("loading");
}
