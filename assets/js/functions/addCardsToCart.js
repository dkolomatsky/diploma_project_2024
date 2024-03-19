// const cartCounterElement = document.getElementById("cart-counter-label");
// const addToCartButtons = document.querySelectorAll(".item-actions__cart");

// let cartCounter = 0;

// const updateCartCounter = () => {
//   cartCounter++;
//   cartCounterElement.textContent = cartCounter;
// };

// // Функция для обновления содержимого блока clientOrder
// const updateClientOrder = (productName, productPrice) => {
//   const clientOrderElement = document.querySelector(".clientOrder");
//   // Создаем новый элемент для добавленного товара
//   const productItem = document.createElement("div");
//   productItem.textContent = `${productName} - ${productPrice}$`;
//   // Добавляем элемент в блок clientOrder
//   clientOrderElement.append(productItem);
// };

// // Добавляем обработчик события для каждой кнопки "Add to cart"
// addToCartButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     // Находим родительский элемент карточки товара
//     const productElement = event.target.closest(".content-item");
//     // Получаем данные о товаре из карточки
//     const productName = productElement.querySelector(".item-title").textContent;
//     const productPrice =
//       productElement.querySelector(".item-price").textContent;
//     updateCartCounter();
//     updateClientOrder(productName, productPrice);
//   });
// });

// 2 part

// import { contentContainer } from "./cards.js";
// import { getPrice, getDataPrice } from "./getTotalPrice.js";

// // Получаем доступ к значению выбраных элеиентов в корзине
// const cartCounterLabel = document.querySelector("#cart-counter-label");

// let cartCounter = 0;

// const cartCounterIncrement = () => {
//   cartCounterLabel.innerHTML = ++cartCounter;
//   if (cartCounter === 1) cartCounterLabel.style.display = "block";
//   if (cartCounter === 0) cartCounterLabel.style.display = "none";
// };

// const btnClickHandler = (e) => {
//   const target = e.target;

//   if (e.target.classList.contains("item-actions__cart")) {
//     cartCounterIncrement();
//   }
// };

// contentContainer.addEventListener("click", btnClickHandler);
