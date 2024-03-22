import {
  renderProducts,
  renderPagination,
  paginationHandler,
} from "./pagination.js";
import { products } from "../data/devices.js";

// Доступ к родителю всех элемениов в карточке товара
export const contentContainer = document.querySelector("#content-container");
// доступ к цыфрам выбора странички отображении карточек товара и кнопкам предыдущая и следующая страницы
const paginationLinks = document.querySelectorAll(".pagination .page-link");

// Функция для создания карточки товара
const createProductCard = (product) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "content-item");

  card.innerHTML = `
    <div class="item-wrapper">
      <div class="item-image">
        <img class="device-image" src="${product.photo}" alt="">
      </div>
      <div class="container-fluid">
        <h2 class="item-title">${product.brand}</h2>
        <div class="item-description"></div>
        <div class="item-characteristics">
          <span><strong>Type: </strong>${product.type}</span>
          <span><strong>Color: </strong>${product.color}</span>
          <span><strong>RAM: </strong>${product.memory}</span>
        </div>
        <div class="item-price"><strong>Price: </strong>${product.price} $</div>
        <div class="item-actions">
          <button class="btn btn-block btn-outline-success my-2 my-sm-0 item-actions__more">
            More details
          </button>
          <button class="btn btn-block btn-outline-success my-2 my-sm-0 item-actions__cart">
            Add to cart <i class="fas fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  return card;
};

const initPagination = () => {
  renderProducts(1);
  paginationLinks.forEach((link) => {
    link.addEventListener("click", paginationHandler);
  });
};
// Функция для фильтрации карточек товаров на основе выбранных значений
const filterCards = (selectedValues) => {
  // проверка на случай если не выбран ни один параметр и нажата кнопка filter чобы выводились только первые 9 карточек на первой странице
  if (selectedValues.length === 0) {
    // Если нет выбранных параметров фильтрации, отобразить первую страницу карточек товаров
    renderProducts(1);
    return;
  }
  // Фильтруем карточки товаров на основе выбранных значений
  const filteredProducts = products.filter((product) => {
    // Проверяем, содержит ли карточка товара все выбранные значения
    return selectedValues.every((value) => {
      // Проверяем, содержит ли карточка товара значение в одном из свойств
      return (
        product.type === value ||
        product.color === value ||
        product.memory === value ||
        product.brand === value
      );
    });
  });

  // переменная для хранения карочек с совпадениями с выбраными параметрами
  const totalFilteredProductCards = filteredProducts.length;

  // Если количество отфильтрованных карточек больше 9, добавляем пагинацию распределения карточек на страницы (макс 9 карточек на странице)
  if (totalFilteredProductCards > 9) {
    // Делим карточки на страницы по 9 карточек на странице
    const pages = Math.ceil(totalFilteredProductCards / 9);
    // Выводим только первые 9 карточек на первой странице
    const firstPageProducts = filteredProducts.slice(0, 9);
    renderProducts(1, firstPageProducts);
    // Добавляем пагинацию для остальных страниц
    renderPagination(pages);
  } else {
    // Если карточек меньше или равно 9, просто отображаем их
    renderProducts(1, filteredProducts);
  }

  // Очищаем контейнер перед добавлением отфильтрованных карточек
  contentContainer.innerHTML = "";

  // Отображаем отфильтрованные карточки товаров
  filteredProducts.forEach((product) => {
    const card = createProductCard(product);
    contentContainer.append(card);
  });
};

initPagination();

export { createProductCard, initPagination, filterCards };
