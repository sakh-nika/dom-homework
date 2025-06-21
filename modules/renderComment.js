import { addLike, initReplyListeners } from "./clickComment.js";
import { commentList } from "./commentList.js";
import { getDateFormat } from "./getDateFormat.js";

// отрисовка комментариев
export const renderCommentList = () => {
  const listEl = document.querySelector(".comments");
  listEl.innerHTML = commentList
    .map((comment, index) => {
      return `
          <li data-index="${index}" class="comment">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${getDateFormat(comment.date)}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
              ${comment.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
              </div>
            </div>
          </li>
        `;
    })
    .join("");

  addLike(renderCommentList);
  initReplyListeners();
};
