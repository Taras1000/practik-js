/**ЗАДАЧА 1
БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
1)створіть масив styles з елементами «Джаз» і «Блюз»
2)добавте «Рок-н-ролл» в кінець
3)замініть значення в середині на «Классика»
4)видаліть перший елемент і виведіть його в консоль
5)вставте «Рэп» і «Регги» на початок масиву

МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл */

//ЗАДАЧА 2
// Напишіть ф - цію logItems(array), яка буде получати масив і
// використовуючи цикл for , який для кожного елемента масива буде
//  виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ['Mango', 'Poly', 'Ajax'];
// function logItems(array) {
//     for (i = 0; i < users.length; i++) {
//         console.log(i,users[i])
//     }
// }
// logItems()

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)

// function findSmallestNumber(array) {
//   let x = array[0];
//   for (let i of array) {
//     if (x > i) {
//       x = i;
//     }
//   }
//   return x;
//   // return XPathResult;
// }

// console.log(findSmallestNumber([49, 4, 83, 7, 12]));
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));

//===================================

// ЗАДАЧА 4

//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// const newStr = str.split('').reverse().join('');

// console.log(str === newStr);

// const newstr1 = newString.split('').reverse().join('');
// console.log(newString === newstr1);

/*ЗАДАЧА 5
Напишіть ф-цію calculateAverage() яка приймає довільну 
кількість аргументів і повертає їх середнє значення.
Всі аргументи будуть тільки числовими */

//ЗАДАЧА 6
// Напишіть ф - цію greet(name), яка при виклику буде получати
// імя(як приклад, "Василь"), і логінувати рядок "Привіт, <імя>".
// У випадку, відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// function greet(name = "гість" ) {
// return `Привіт, ${name}`
// }

// ЗАДАЧА 7
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс з таким іменем не найдено'
updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);

function addCourse(name) {
  if (courses.includes(name)) {
    console.log("У вас уже є такий курс");
    return;
  }
  courses.push(name);
}

function removeCourse(name) {

  const index = courses.indexOf(name);
  if (index === - 1) {
    console.log('Курс з таким іменем не найдено');
  }
  courses.splice(index, 1);
}
console.log(removeCourse("React"));
console.log(courses);

function updateCourse(oldName, newName) {

  const updateIndex = courses.indexOf(oldName);
  courses.splice(updateIndex, 1, newName);

  
}
console.log(courses);