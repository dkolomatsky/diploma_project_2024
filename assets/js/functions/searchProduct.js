import { products } from "../data/devices.js";
import { createProductCard } from "./cards.js";
import { contentContainer } from "./cards.js";
import { renderProducts } from "./pagination.js";
import { noResulstmassage } from "./showMessages.js";

// Находим элементы формы поиска
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Обработчик события для кнопки поиска
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase(); // Получаем значение из поля ввода и приводим к нижнему регистру

  if (searchValue) {
    // Если введено значение для поиска
    const filteredProducts = products.filter((product) => {
      // Фильтруем карточки товаров, проверяя совпадение с введенным значением
      return (
        product.brand.toLowerCase().includes(searchValue) ||
        product.type.toLowerCase().includes(searchValue) ||
        product.color.toLowerCase().includes(searchValue) ||
        product.memory.toLowerCase().includes(searchValue)
      );
    });

    // Очищаем контейнер перед добавлением отфильтрованных карточек
    contentContainer.innerHTML = "";

    // делаем проверку если совпадений в поиске не найдено то вывдим сообщение или если найдено то отображаем их а если поле пустое то просто выводим карточки по умолчанию
    if (filteredProducts.length === 0) {
      // вызываем метод для сообщения о отсутствии результата
      noResulstmassage();
    } else {
      // Отображаем отфильтрованные карточки товаров
      filteredProducts.forEach((product) => {
        const card = createProductCard(product);
        contentContainer.append(card);
      });
    }
  } else {
    // Если поле ввода пустое, отображаем первые 9 карточек
    renderProducts(1);
  }
});
