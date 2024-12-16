let lang = "en";

if (lang == "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  );
} else if (lang == "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
}

const weekDays = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

console.log(weekDays[lang]);

let namePerson = "Артем";

namePerson == "Артем"
  ? console.log(namePerson + " директор")
  : namePerson == "Александр"
  ? console.log(namePerson + " преподаватель")
  : console.log(namePerson + " студент");
