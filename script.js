"use strict";
let str =
  "   На данный момент JavaScript кажется чересчур перемудрённым языком. В особенности callback'ов и синтаксиса.   ";
const myFunc = (str) => {
  if (typeof str !== "string") {
    console.log(" Не строка");
  } else {
    str = str.trim();
    let shortStr = str.slice(0, 30);
    if (str.length > 30) {
      shortStr += "...";
    }
    console.log(shortStr);
  }
};
myFunc(str);
