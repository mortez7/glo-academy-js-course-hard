const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const today = new Date();

for (let key in week) {
  if (Number(key) === today.getDay() - 1) {
    document.body.insertAdjacentHTML("beforeend", `<b>${week[key]}</b>`);
  } else if (Number(key) === 5 || Number(key) === 6) {
    document.body.insertAdjacentHTML("beforeend", `<i>${week[key]}</i>`);
  } else {
    document.body.insertAdjacentHTML("beforeend", `${week[key]}`);
  }
  document.body.insertAdjacentHTML("beforeend", "<br>");
}
