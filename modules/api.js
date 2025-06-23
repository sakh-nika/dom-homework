import { updateComments } from "./commentList.js";
import { renderCommentList } from "./renderComment.js";

const host = "https://wedev-api.sky.pro/api/v1/victoria-luchina";

// запрос списка комментов
export const fetchAndRenderComments = () => {
  return fetch(host + "/comments")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      const appComments = responseData.comments.map((comment) => {
        return {
          name: comment.author.name,
          date: new Date(comment.date),
          text: comment.text,
          likes: comment.likes,
          isLiked: false,
        };
      });
      return appComments;
    })
    .then((appComments) => {
      updateComments(appComments);
      renderCommentList();
    });
};

//добавление комментария
export const postComment = (text, name) => {
  return (
    fetch(host + "/comments", {
      method: "POST",
      body: JSON.stringify({
        text: text,
        name: name,
      }),
    })
      //   .then(() => {
      //     return fetch(host + "/comments")
      // })
      //   .then((response) => {
      //     return response.json()
      // })
      //   .then((responseData) => {
      //     const appComments = responseData.comments.map((comment) => {
      //       return {
      //         name: comment.author.name,
      //         date: new Date(comment.date),
      //         text: comment.text,
      //         likes: comment.likes,
      //         isLiked: false,
      //       };
      //     });
      //     return appComments;
      //   })
      .then(() => {
        return fetchAndRenderComments();
      })
      
  );
};

// 
export function delay(interval = 300) {
  return new Promise((resolve) => {
     setTimeout(() => {
     resolve();
     }, interval);
  });
}
