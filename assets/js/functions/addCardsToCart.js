import { contentContainer } from "./cards.js";

const cartCounterLabel = document.getElementById("cart-counter-label");

let selectedItemsCounter = 0;

const btnClickProductCard = (e) => {
  const target = e.target;

  if (e.target.classList.contains("item-actions__cart")) {
    selectedItemsCounter++;
    cartCounterLabel.innerText = selectedItemsCounter;
    cartCounterLabel.style.display = "block";

    cartCounterIncrement();
  }
};

const cartCounterIncrement = () => {};
const cartCounterDecrement = () => {};

contentContainer.addEventListener("click", btnClickProductCard);
