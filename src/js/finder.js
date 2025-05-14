const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("results-grid");
const messageArea = document.getElementById("message-area");
const placeholderImage =
  "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png";
const modal = document.getElementById("recipe-model");
const modalContent = document.getElementById("recipe-details-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

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
  resultsGrid.innerHTML = "";
  const dataset = await fetch("./assets/ingredients.json")
    .then((response) => response.json())
    .then((data) => {
      try {
        if (data) {
          displayProducts(data, query.toLowerCase());
        } else {
          showMessage(`"${query}" does not exist in product inventory`, true);
        }
      } catch (error) {
        showMessage(`Something went wrong, Please try again.${error}`, true);
      }
    })
    .catch((error) => console.log("Error message: ", error));
}

function showMessage(message, isError = false, isLoading = false) {
  messageArea.textContent = message;

  if (isError) messageArea.classList.add("error");
  if (isLoading) messageArea.classList.add("loading");
}

function clearMessage() {
  messageArea.textContent = "";
  messageArea.classList = "message";
}

function displayProducts(products, name) {
  clearMessage();
  if (!products || products.length === 0) {
    showMessage("No products to display");
    return;
  }

  products.forEach((product) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe-item");
    if (
      product["name"].toLowerCase().includes(name) ||
      product["categories"].toLowerCase().includes(name)
    ) {
      console.log(product.name);
      recipeDiv.innerHTML = `
                <img src="${placeholderImage}" alt="placeholder" loading="lazy"> 
                <h3>${product.name}</h3>
            `;
      resultsGrid.appendChild(recipeDiv);
    }
  });
}

function showModal() {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

resultsGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".recipe-item");

  if (card) {
    getRecipeDetails(123);
  }
});

async function getRecipeDetails(id) {
  showModal();
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
