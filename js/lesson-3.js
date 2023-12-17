// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача,
//     через prompt і викликає колбек функцію(callback)
// greet(name) - колбек, який приймає імя і логінує в консоль
// рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const name = prompt("name");
//     callback(name);
// };

// function greet(name) {
//     console.log(`Привіт + ${name}`);
// };

// letMeSeeYourName(greet);



// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) - приймає імя та ціну товару, а також колбек.
// Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);


// function makeProduct(name, price, callback) {

//     const products = { name, price, id: Date.now() }
//     callback(products);
    
// };

// function showProduct(product) {
    
// console.log(product);
    
// };

// makeProduct("Холодильник", 10000, showProduct);


// ЗАДАЧА 3

const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
{
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
{
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },

{
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
];
  
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;

// const arrScientists = scientists.filter((scientist) =>
//     scientist.born >= 1800 && scientist.born < 1900)
//     .map((scientist) => `${scientist.name} ${scientist.surname}`);


//     console.log(arrScientists);

// 2)порахувати загальну суму років скільки прожили вчені,
//     і визначити середнє значення;

// const result = scientists.reduce((acc, { born, dead }) => acc += (dead - born) , 0);

// console.log(result/scientists.length);

// 3) відсортувати по алфавіту;

// const sortedAlphabet = [...scientists].toSorted((a, b) =>
//     (a.name > b.name) ? 1 : -1);

//     console.log(sortedAlphabet);