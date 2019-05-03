const monthNames = [
  "янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"
];

const daysOfWeek = [
  "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"
];

export const getFormatedDate = (dateString) => {
  let date = new Date(dateString);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dayOfWeek = date.getDay();

  return day + " " + monthNames[month] + " " + year + ", " + daysOfWeek[dayOfWeek];
};

export const declensionOfNumber = (number, titles) => {  
  let cases = [2, 0, 1, 1, 1, 2];  
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
};

const currencySigns = {
  RUB: "₽",
  USD: "$",
  EUR: "€"
};

export const formatPrice = (price, currency) => {
  //let nbsp = "\u00A0";
  let thinsp = "\u2009";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thinsp) + thinsp + currencySigns[currency];
};

//fake delay for loading state test
export const fakeDelay = (func) => {
  setTimeout(func, 1000);
};

const utils = {
  getFormatedDate,
  declensionOfNumber,
  formatPrice,
  fakeDelay
};

export default utils;