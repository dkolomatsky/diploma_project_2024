import { products } from "../data/devices.js";
import { createProductCard } from "./cards.js";
import { contentContainer } from "./cards.js";
import { showAllProducts } from "./showAllProductCards.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");

  const searchProducts = (searchTerm) => {
    if (searchTerm === "") {
      showAllProducts();
      return;
    }

    const searchTermLowercase = searchTerm.toLowerCase();

    const filteredProducts = products.filter((product) => {
      return Object.values(product).some((value) =>
        value.toString().toLowerCase().includes(searchTermLowercase)
      );
    });

    contentContainer.innerHTML = "";

    filteredProducts.forEach((product) => {
      const card = createProductCard(product);
      contentContainer.append(card);
    });
  };

  searchButton.addEventListener("click", () => {
    searchProducts(searchInput.value.trim());
  });
});
