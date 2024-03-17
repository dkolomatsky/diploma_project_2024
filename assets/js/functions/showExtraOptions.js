// доступ к блоку параметров выбора бренда
const extraOption = document.querySelector(".extra-option");
//доступ к ссылке открытия и скрытия екстра параметров
const showOption = document.querySelector(".show-option");
const closeOption = document.querySelector(".close-option");

extraOption.classList.add("hidden-option");
closeOption.classList.add("hidden-option");

const showExtraParams = () => {
  extraOption.classList.add("show-more");
  showOption.classList.add("hidden-option");
  closeOption.classList.add("show-more");
};
const closeExtraParams = () => {
  extraOption.classList.remove("show-more");
  closeOption.classList.remove("show-more");
  showOption.classList.remove("hidden-option");
};
showOption.addEventListener("click", showExtraParams);
closeOption.addEventListener("click", closeExtraParams);
