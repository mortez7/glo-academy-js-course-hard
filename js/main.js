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
    console.log(`%c${week[key]}`, "font-weight: bold;");
  } else if (Number(key) === 5 || Number(key) === 6) {
    console.log(`%c${week[key]}`, "font-style: italic;");
  } else {
    console.log(week[key]);
  }
}
