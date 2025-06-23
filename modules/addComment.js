import { getReplaceAll } from "./getReplaceAll.js";
import { postComment } from "./api.js";

// добавление нового комментария (cоздаем объект, добавляем его в массив, а рендерная функция его отрисовывает)

export const addNewComment = () => {
  const nameEl = document.getElementById("name-input");
  const textEl = document.getElementById("text-input");
  const buttonEl = document.querySelector(".add-form-button");

  buttonEl.addEventListener("click", () => {
    if (nameEl.value === "" || textEl.value === "") {
      console.error("Заполните форму!");
      return;
    }
    // добавление стилей для режима ожидания, а после загрузки возвращение к исходным
    document.querySelector(".load").classList.add("loading"); // при стилях прописанных в сss
    // document.querySelector(".loading").style.display = "block"; // при инлайновых стилях
    document.querySelector(".add-form").style.display = "none";
    // добавляем новый комментарий по клику
    postComment(getReplaceAll(textEl.value), getReplaceAll(nameEl.value)).then(
      () => {
        document.querySelector(".load").classList.remove("loading");
        // document.querySelector(".loading").style.display = "none";
        document.querySelector(".add-form").style.display = "flex";
        nameEl.value = "";
        textEl.value = "";
      }
    );
  });
};
