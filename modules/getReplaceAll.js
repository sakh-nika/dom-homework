export const getReplaceAll = (value) => {
   return value.replaceAll("<", "&lt").replaceAll(">", "&gt");
}