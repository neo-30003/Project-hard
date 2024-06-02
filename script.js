"use strict";
const language = new Map([['ru', 'пн, вт, ср, чт, пт, сб, вс'], ['en', 'mn, ts, wd, th, fr, st, sn']])

let lang = "ru";

if (lang == "ru") {
  console.log(language.get('ru'));
} else if (lang == "en") {
  console.log(language.get('en'));
} else {
  console.log("Выберите язык: русский или английский");
}

lang = "en";

switch (lang) {
  case "ru":
    console.log(language.get('ru'));
    break;
  case "en":
    console.log(language.get('en'));
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
