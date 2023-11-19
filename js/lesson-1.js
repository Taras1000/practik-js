// // ЗАДАЧА 1
// // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА
// // "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "Galyna";
// const age = 35;
// const hobby = "Javascript";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;
// console.log(message);

//ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ,
// ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const nameUser = prompt("Введите свое имя");
// const userEmail = prompt("Введите свой Email");
// const userTel = prompt("Введите свой номер телефона");

// const message = `КОРИСТУВАЧ ${nameUser} ВИКОРИСТОВУЄ ${userEmail} ПОЧТУ І ${userTel} ТЕЛЕФОН`;
// console.log(message);

// Задача 3
//ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));

// if (month === 12) {
//   console.log(month);
// } else {
//   console.log("НЕ ЗНАЄТЕ? 12");
// }

// ЗАДАЧА 4
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО
//  І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО, ЧИ НЕ ПАРНЕ.

// const number = Number(prompt("input number"));
// if (number % 2 === 0) {
//     console.log("parne chyslo");
// } else {
//     console.log("neparne chyslo");
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ,
//     І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ,
//         АБО ВИДАЄ ПОМИЛКУ, ЩО НЕ ВІРНИЙ ЛОГІН

// const login = "hdgfkjhk";
// const password = "qwerty";
// const newLogin = prompt("Input loggin");
// const newPassword = prompt("Input password");
// if (newLogin === login && newPassword === password) {
//     console.log("Welcome");
// } else {
//     console.log("Error");
// }
// const result = newLogin === login && newPassword === password ? "Welcome" : "Error";
// console.log(result);

/* ЗАДАЧА 6
НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, 
І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ */

// const userMonth = Number(prompt("Введите свой месяц рождения"));

// if (userMonth === 12 || userMonth === 1 || userMonth === 2) {
//   alert("Ты родился зимой");
// } else if (userMonth >= 3 && userMonth <= 5) {
//   alert("Ты родился весной");
// } else if (userMonth >= 6 && userMonth <= 8) {
//   alert("Ты родился летом");
// } else if (userMonth >= 9 && userMonth <= 11) {
//   alert("Ты родился осень");
// } else {
//   alert("Такого месяца не существует");
// }

/* ЗАДАЧА 7
НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА 
СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
ЯКЩО ДЕНЬ - ціна 1.99
ЯУЩО НЕДІЛЯ - ціна 5.99
ЯКЩО МІСЯЦЬ - ціна 10.99
ЯКЩО РІК - ціна 100.99 */

// const userPeriod = prompt("Период подписки?").toUpperCase();

// switch (userPeriod) {
//   case "ДЕНЬ":
//     alert("1.99");
//     break;
//   case "НЕДІЛЯ":
//     alert("5.99");
//     break;
//   case "МІСЯЦЬ":
//     alert("10.99");
//     break;
//   case "РІК":
//     alert("100.99");
//     break;

//   default:
//     alert("Error");
//     break;
// }
