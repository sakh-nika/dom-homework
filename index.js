import { fetchAndRenderComments } from "./modules/api.js";
import { addNewComment } from "./modules/addComment.js";

// пока данные загружаются, выходит сообщение
document.querySelector(".comments").innerHTML = "Пожалуйста, подождите, комментарии загружаются..."

// здесь получаем и воспроизводим комментарии
fetchAndRenderComments()

// здесь добавляем новые комментарии
addNewComment();
