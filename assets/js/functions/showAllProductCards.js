import { contentContainer, createProductCard } from "./cards.js";
import { products } from "../data/devices.js";

// функция при вызове которой обновляется начальное отображение карточек товаров
const showAllProducts = () => {
  // Очищаем контейнер перед добавлением всех товаров
  contentContainer.innerHTML = "";
  // Отображаем все товары
  products.forEach((product) => {
    const card = createProductCard(product);
    contentContainer.append(card);
  });
};

export { showAllProducts };
