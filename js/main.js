"use strict";

const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const blockA = document.getElementById("formatA");
const blockB = document.getElementById("formatB");

function start() {
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = formatHours(now.getHours());
  const minutes = formatMinutes(now.getMinutes());
  const seconds = formatSeconds(now.getSeconds());

  const formatA = `Сегодня ${dayOfWeek}, ${day} ${month} ${year} года, ${hours} ${minutes} ${seconds}`;

  const formatB = `${addZero(now.getDate())}.${addZero(
    now.getMonth() + 1
  )}.${year} - ${addZero(now.getHours())}:${addZero(
    now.getMinutes()
  )}:${addZero(now.getSeconds())}`;

  blockA.textContent = formatA;
  blockB.textContent = formatB;
}

function formatHours(hours) {
  if (hours === 1) {
    return hours + " час";
  } else if (hours >= 2 && hours <= 4) {
    return hours + " часа";
  } else {
    return hours + " часов";
  }
}

function formatMinutes(minutes) {
  if (
    minutes === 1 ||
    minutes === 21 ||
    minutes === 31 ||
    minutes === 41 ||
    minutes === 51
  ) {
    return minutes + " минута";
  } else if (
    (minutes >= 2 && minutes <= 4) ||
    (minutes >= 22 && minutes <= 24) ||
    (minutes >= 32 && minutes <= 34) ||
    (minutes >= 42 && minutes <= 44) ||
    (minutes >= 52 && minutes <= 54)
  ) {
    return minutes + " минуты";
  } else {
    return minutes + " минут";
  }
}

function formatSeconds(seconds) {
  if (
    seconds === 1 ||
    seconds === 21 ||
    seconds === 31 ||
    seconds === 41 ||
    seconds === 51
  ) {
    return seconds + " секунда";
  } else if (
    (seconds >= 2 && seconds <= 4) ||
    (seconds >= 22 && seconds <= 24) ||
    (seconds >= 32 && seconds <= 34) ||
    (seconds >= 42 && seconds <= 44) ||
    (seconds >= 52 && seconds <= 54)
  ) {
    return seconds + " секунды";
  } else {
    return seconds + " секунд";
  }
}

function addZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

setInterval(start, 1000);
