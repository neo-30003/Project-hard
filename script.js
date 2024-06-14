"use strict";
const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const toDay = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
week.forEach((dayOfWeek, index) => {
  if (index === toDay) {
    if (dayOfWeek === "Суббота" || dayOfWeek === "Воскресенье") {
      document.write(
        `<p style="font-style: italic; font-weight: bold;">${week[index]}</p>`
      );
    } else {
      document.write(`<p style="font-weight: bold;">${week[index]}</p>`);
    }
  } else if (dayOfWeek === "Суббота" || dayOfWeek === "Воскресенье") {
    document.write(`<p style="font-style: italic;">${week[index]}</p>`);
  } else {
    document.write(`<p>${week[index]}</p>`);
  }
});
