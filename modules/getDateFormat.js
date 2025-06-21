// дата в заданном формате
export const getDateFormat = (date) => {
  const dateEl = `0${date.getDate()}`.slice(-2); // slice(-2)добавляет ведущий ноль если это необходимо
  const monthEl = `0${date.getMonth() + 1}`.slice(-2);
  const yearEl = `${date.getFullYear()}`.slice(2);
  const hourEl = `0${date.getHours()}`.slice(-2);
  const minEl = `0${date.getMinutes()}`.slice(-2);
  return dateEl + "." + monthEl + "." + yearEl + " " + hourEl + ":" + minEl;
};
