// дата в заданном формате
export const getDateFormat = () => {
  const dateEl = `0${new Date().getDate()}`.slice(-2); // slice(-2)добавляет ведущий ноль если это необходимо
  const monthEl = `0${new Date().getMonth() + 1}`.slice(-2);
  const yearEl = `${new Date().getFullYear()}`.slice(2);
  const hourEl = `0${new Date().getHours()}`.slice(-2);
  const minEl = `0${new Date().getMinutes()}`.slice(-2);
  return dateEl + "." + monthEl + "." + yearEl + " " + hourEl + ":" + minEl;
};
