import { addNewComment } from "./addComment.js";
import { addLike, initCommentListeners } from "./clickComment.js";
import { commentList } from "./commentList.js";

// отрисовка комментариев
export const renderCommentList = () => {
  const listEl = document.querySelector(".comments");
  listEl.innerHTML = commentList
    .map((comment, index) => {
      return `
          <li data-index="${index}" class="comment">
            <div class="comment-header">
              <div>${comment.name}</div>
              <div>${comment.date}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
              ${comment.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button data-index="${index}" class="like-button ${comment.likeStatus ? "-active-like" : ""}"></button>
              </div>
            </div>
          </li>
        `;
    })
    .join("");
  addLike();
  initCommentListeners();
  addNewComment();
};
