// блок для работы с переключением страничек с карточками товаров

import { products } from "../data/devices.js";
import { createProductCard } from "../functions/cards.js";
import { contentContainer } from "../functions/cards.js";

const itemsPerPage = 9;
let currentPage = 1;

// функция добавления карточек товаров на страницу и смены карточек при выборе конкретной страницы
export const renderProducts = (page) => {
  // функция вычисляет начальный и конечный индексы для элементов, которые должны быть отображены на текущей странице. Это делается путем умножения номера страницы на количество элементов на странице (в данном случае 9) для определения начального индекса и умножения на номер страницы плюс один для определения конечного индекса.
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  // создаем подмассив displayedProducts, содержащий элементы из исходного массива products соответствующие текущей странице
  const displayedProducts = products.slice(start, end);

  contentContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых карточек
  // проходим по каждому элементу displayedProducts и создаем для него карточку товара с помощью функции createProductCard, добавляет ее в контейнер contentContainer.
  displayedProducts.forEach((product) => {
    const card = createProductCard(product);
    contentContainer.append(card);
  });
};

export const paginationHandler = (e) => {
  e.preventDefault();
  // передаем в currentPage значение страницы которая выбрана
  currentPage = parseInt(e.target.dataset.page);
  // передаем значение currentPage через параметр page в функцию renderProducts
  renderProducts(currentPage);
};
