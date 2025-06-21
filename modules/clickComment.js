import { commentList } from "./commentList.js";

// обработчик лайков
export const addLike = (renderCommentList) => {
  const likeButtons = document.querySelectorAll(".like-button");
  for (const buttonLike of likeButtons) {
    buttonLike.addEventListener("click", (event) => {
      event.stopPropagation(); // при клике на иконку лайка блокирует клик на комментарий initCommentListeners()
      const index = buttonLike.dataset.index; // сохраняем индекс в переменную
      const comment = commentList[index]; // находим комментарий по индексу
      comment.isLiked = !comment.isLiked; // ! меняет значение на противоположное исходному
      comment.likes += comment.isLiked ? 1 : -1; // при значении isLiked: false условие вернет TRUE, поэтому + 1; в противном случае + -1
      // console.log(comment.isLiked);
      renderCommentList();
    });
  }
};

// клик на комментарий
export const initReplyListeners = () => {
  const textEl = document.getElementById("text-input");
  const commentElements = document.querySelectorAll("li");

  for (const commentElement of commentElements) {
    commentElement.addEventListener("click", () => {
      const commentIndex = commentElement.dataset.index; // сохраняем индекс в переменную
      const currentComment = commentList[commentIndex]; //  находим комментарий по индексу
      textEl.value = `> ${currentComment.name}: ${currentComment.text}\n\n`;
    });
  }
};
