import { renderCommentList } from "./renderComment.js";
import { commentList } from "./commentList.js";
import { textareaEl } from "./addComment.js";

// обработчик лайков
export const addLike = () => {
  const likeButtons = document.querySelectorAll(".like-button");
  for (const buttonLike of likeButtons) {
    buttonLike.addEventListener("click", (event) => {
      event.stopPropagation(); // при клике на иконку лайка блокирует клик на комментарий initCommentListeners()
      const index = buttonLike.dataset.index; // сохраняем индекс в переменную
      const comment = commentList[index]; // находим комментарий по индексу
      comment.likeStatus = !comment.likeStatus; // ! меняет значение на противоположное исходному
      comment.likes += comment.likeStatus ? 1 : -1; // при значении likeStatus: false условие вернет TRUE, поэтому + 1; в противном случае + -1
      // console.log(comment.likeStatus);
      renderCommentList();
    });
  }
};

// клик на комментарий
export const initCommentListeners = () => {
  const commentElements = document.querySelectorAll("li");
  for (const commentElement of commentElements) {
    commentElement.addEventListener("click", () => {
      const commentIndex = commentElement.dataset.index; // сохраняем индекс в переменную
      const comment = commentList[commentIndex]; //  находим комментарий по индексу
      textareaEl.value = `> ${comment.name} ${comment.text}\n\n`;
    });
  }
};
