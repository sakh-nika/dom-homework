import { fetchComments } from "./modules/api.js";
import { updateComments } from "./modules/commentList.js";
import { addNewComment } from "./modules/addComment.js";
import { renderCommentList } from "./modules/renderComment.js";

// здесь получаем комментарии
fetchComments().then((data) => {
  updateComments(data);
  renderCommentList();
});

addNewComment(renderCommentList);
