"use strict";
let lang = "ru";

if (lang == "ru") {
  console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
} else if (lang == "en") {
  console.log("mn", "ts", "wd", "th", "fr", "st", "sn");
} else {
  console.log("Выберите язык: русский или английский");
}

let language = "en";

switch (language) {
  case "ru":
    console.log("пн", "вт", "ср", "чт", "пт", "сб", "вс");
    break;
  case "en":
    console.log("mn", "ts", "wd", "th", "fr", "st", "sn");
    break;
  default:
    console.log("Выберите язык: русский или английский");
}

let Arr = [];
Arr.ru = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
Arr.en = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
console.log(Arr[lang]);

let namePerson = "Артём";
console.log(
  namePerson == "Артём"
    ? "Директор"
    : namePerson === "Александр"
    ? "Преподователь"
    : "Студент"
);
