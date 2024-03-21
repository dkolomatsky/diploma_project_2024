// метод для создания и вывода блока соообения если результат поиска или фильтрации не найден
import { contentContainer } from "./cards.js";
export const noResulstmassage = () => {
  const noResulstmassage = document.createElement("div");

  noResulstmassage.textContent = "По данному запросу ничего не найдено";
  noResulstmassage.classList.add("noResulstmassage");
  contentContainer.append(noResulstmassage);
};
