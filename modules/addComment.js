import { getDateFormat } from "./getDateFormat.js";
import { renderCommentList } from "./renderComment.js";
import { commentList } from "./commentList.js";
import { getReplaceAll } from "./getReplaceAll.js";

// добавление нового комментария (cоздаем объект, добавляем его в массив, а рендерная функция его отрисовывает)

const buttonEl = document.querySelector(".add-form-button");
const inputNameEl = document.querySelector(".add-form-name");
export const textareaEl = document.querySelector(".add-form-text");

export const addNewComment = () => {
  buttonEl.addEventListener("click", () => {
    console.log("It works!");
    if (inputNameEl.value === "" || textareaEl.value === "") {
      return;
    } else {
      const newComment = {
        name: getReplaceAll(inputNameEl.value),
        date: getDateFormat(),
        text: getReplaceAll(textareaEl.value),
        likeStatus: false,
        likes: 0,
      };
      commentList.push(newComment);
      renderCommentList();
      inputNameEl.value = "";
      textareaEl.value = "";
    }
  });
};
