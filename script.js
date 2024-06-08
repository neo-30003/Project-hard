"use strict";
// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

const arr = ["325", "26481", "7553", "10448411", "47", "715289", "37987"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

const simpleNumbers = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const displayNumbers = (max) => {
  for (let i = 2; i <= max; i++) {
    if (simpleNumbers(i)) console.log(i + " Делители этого числа: 1 и " + i);
  }
};

displayNumbers(100);
