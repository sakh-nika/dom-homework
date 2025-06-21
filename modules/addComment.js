import { updateComments } from "./commentList.js";
import { getReplaceAll } from "./getReplaceAll.js";
import { postComment } from "./api.js";

// добавление нового комментария (cоздаем объект, добавляем его в массив, а рендерная функция его отрисовывает)

export const addNewComment = (renderCommentList) => {
  const nameEl = document.getElementById("name-input");
  const textEl = document.getElementById("text-input");
  const buttonEl = document.querySelector(".add-form-button");

  buttonEl.addEventListener("click", () => {
    if (nameEl.value === "" || textEl.value === "") {
      console.error("Заполните форму!");
      return;
    }

    // добавляем новый комментарий по клику
    postComment(getReplaceAll(textEl.value), getReplaceAll(nameEl.value)).then(
      (data) => {
        updateComments(data);
        renderCommentList();
        nameEl.value = "";
        textEl.value = "";
      }
    );
  });
};
