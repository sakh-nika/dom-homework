const host = "https://wedev-api.sky.pro/api/v1/victoria-luchina";

// запрос списка комментов
export const fetchComments = () => {
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
    });
};

//добавление комментария
export const postComment = (text, name) => {
  return fetch(host + "/comments", {
    method: "POST",
    body: JSON.stringify({
      text: text,
      name: name,
    }),
  }).then(() => {
    return fetchComments();
  });
};
