import { filterCards } from "../functions/cards.js";

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitButton = document.querySelector(".sidebar-filter__submit");

// Функция для обработки события изменения состояния чекбокса
const handleCheckboxChange = (event) => {
  const checkbox = event.target;

  // Если чекбокс выбран, устанавливаем атрибут checked, иначе снимаем его
  if (checkbox.checked) {
    checkbox.setAttribute("checked", "checked");
  } else {
    checkbox.removeAttribute("checked");
  }
};

// Добавление обработчика события изменения состояния для каждого чекбокса
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckboxChange);
});

// Функция для обработки нажатия на кнопку submit
const handleSubmitButtonClick = () => {
  // Получаем выбранные чекбоксы
  const checkedCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  // создаем переменную для хранения фыбраных параметров для фильтрации карточек
  const selectedValues = [];
  // Выводим значения выбранных чекбоксов в консоль
  checkedCheckboxes.forEach((checkbox) => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    selectedValues.push(label.textContent.trim());
  });
  // запускаем функцию фильтрации карточек товаров согласно выбраным инпутам
  filterCards(selectedValues);
};

// Добавление обработчика события нажатия на кнопку submit
submitButton.addEventListener("click", handleSubmitButtonClick);
