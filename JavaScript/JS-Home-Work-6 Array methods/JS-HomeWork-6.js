// - создать массив с 20 числами.
let numbers = [20, 55, 63, -5, 8, 98, 500, 33, 64, 58, -2, -90, 99, 131, 25, 0, 58, 6, 19, 20];

// -- при помощи метода sort и колбека  отсортировать массив.
// let a = [...numbers].sort((a, b) => a - b);
// console.log(a);
// зробила копію масива, щоб sort не видозмінював його

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let b = [...numbers].sort((a, b) => b - a);
// console.log(b);

// -- при помощи filter получить числа кратные 3
// let c = numbers.filter((el => el % 3 === 0));
// console.log(c);

// -- при помощи filter получить числа кратные 10
// let d = numbers.filter((el => el % 10 === 0));
// console.log(d);

// -- перебрать (проитерировать) массив при помощи foreach()
// numbers.forEach(el => console.log(el));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let tripleValue = numbers.map(el => el * 3);
// console.log(tripleValue);
// console.log(numbers);

// - создать массив со словами на 15-20 элементов.
let text = ['слово', 'word',  'srgdfgdf', 'Yana', 'Evgeniy', 'Dmytro', 'Vasya', 'Anastasiya', 'Lev', 'Sofa', 'Lilya', 'Yaroslav', 'Anna', 'Ekateryna', 'слово2', '15']

// -- отсортировать его по алфавиту в восходящем порядке.
// let abc = text.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 0 );
// console.log(abc);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let reverse = text.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 0 );
// console.log(reverse);

// -- отфильтровать слова длиной менее 4х символов
// let wordLength = text.filter(el => el.length < 4 );
// console.log(wordLength)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let newArr = text.map(el => el + '!');
// console.log(newArr)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
     {name: 'vasya', age: 31, status: false},
     {name: 'petya', age: 30, status: true},
     {name: 'kolya', age: 29, status: true},
     {name: 'olya', age: 28, status: false}, 
     {name: 'max', age: 30, status: true},
     {name: 'anya', age: 31, status: false},
     {name: 'oleg', age: 28, status: false}, 
     {name: 'andrey', age: 29, status: true},
     {name: 'masha', age: 30, status: true},
     {name: 'olya', age: 31, status: false},
     {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let age = users.sort((a, b) => a.age - b.age);
// console.log(age);

// let age2 = users.sort((a, b) => b.age - a.age);
// console.log(age2);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let userName = users.sort((a, b) => a.name.length - b.name.length);
// console.log(userName);

// let userName2 = users.sort((a, b) => b.name.length - a.name.length);
// console.log(userName2);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let usersCopy = JSON.parse(JSON.stringify(users));
let userId = usersCopy.map((el, index) => {
    el.id = index;
    return el;
});

console.log('old', users);
console.log('new', userId);


// - відсортувати його за індентифікатором
let userIdSort = usersCopy.sort((a, b) => a.id - b.id);
console.log(userIdSort);

// -- наисать функцию калькулятора с 2мя числами и колбеком

function calc(a, b, callback) {
    console.log(callback(a, b));
    return callback(a, b);
}
calc(4, 8, (a, b) => a + b);
calc(12, 2, (a, b) => a - b);
calc(6, 3, (a, b) => a * b);

// -- наисать функцию калькулятора с 3мя числами и колбеком
function calс2 (a, b, c, callback) {
    console.log(callback(a, b, c));
    return callback(a, b, c);
}

calс2(4, 8, 10, (a, b, c) => a + b + c);
calс2(12, 2, 3, (a, b, c) => a - b + c);
calс2(6, 3, 12, (a, b, c) => (a * b) + c);
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

let cars = [
     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
     ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let volume = cars.filter(item => item.volume > 3);
// console.log(volume);

// - двигун = 2л
// let volume2 = cars.filter(item => item.volume == 2);
// console.log(volume2);

// - виробник мерс
// let producer = cars.filter(item => item.producer == 'mercedes');
// console.log(producer);

// - двигун більше 3х літрів + виробник мерседес

// let filter = cars.filter(item => item.producer == 'mercedes' && item.volume > 3);
// console.log(filter);

// - двигун більше 3х літрів + виробник субару

// let filter2 = cars.filter(item => item.producer == 'subaru' && item.volume > 3);
// console.log(filter2);

// - сили більше ніж 300
// let power = cars.filter(item => item.power > 300);
// console.log(power);

// - сили більше ніж 300 + виробник субару
// let power2 = cars.filter(item => item.power > 300 && item.producer == 'subaru');
// console.log(power2);

// - мотор серіі ej
// let engine = cars.filter(item => item.engine > 300);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter3 = cars.filter(item => item.producer == 'subaru' && item.power > 300 && item.engine.startsWith('ej'));
// console.log(filter3);

// let filter4 = cars.filter(item => item.producer == 'subaru' && item.power > 300 && item.engine.substring(0, 2) == 'ej');
// console.log(filter4);

// - двигун меньше 3х літрів + виробник мерседес
// let filter5 = cars.filter(item => item.producer == 'mercedes' && item.volume < 3);
// console.log(filter5);

// - двигун більше 2л + сили більше 250
// let filter6 = cars.filter(item => item.power > 250 && item.volume > 2);
// console.log(filter6);

// - сили більше 250  + виробник бмв

// let filter7 = cars.filter(item => item.power > 250 && item.producer == 'bmw');
// console.log(filter7);


// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'assfg', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

// -- отсортировать его по id пользователей
// let sort = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sort);

// -- отсортировать его по id пользователей в обратном опрядке
// let sort2 = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sort2);

// -- отсортировать его по возрасту пользователей
// let sort3 = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sort3);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort4 = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sort4);

// -- отсортировать его по имени пользователей

// let sort5 = usersWithAddress.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
// console.log(sort5);

// -- отсортировать его по имени пользователей в обратном порядке
// let sort6 = usersWithAddress.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
// console.log(sort6);

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sort7 = usersWithAddress.sort((a, b) => a.address.street.toLowerCase() < b.address.street.toLowerCase() ? -1 : 1);
// console.log(sort7);

// -- отсортировать его по номеру дома по возрастанию
// let sort8 = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sort8);


// -- отфильтровать (оставить) тех кто младше 30
// let filter11 = usersWithAddress.filter(item => item.age < 30);
// console.log(filter11);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter12 = usersWithAddress.filter(item => item.status === false);
// console.log(filter12);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter13 = usersWithAddress.filter(item => item.status === false && item.age < 30);
// console.log(filter13);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter14 = usersWithAddress.filter(item => item.address.number % 2 == 0);
// console.log(filter14);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору,
// що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), 
//та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв.
// Якщо досвід водія менший за 5 років, але його вік більший за 25, 
//то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let myCars = [ 
     {producer:"subaru", power: 400, year: 2010, price: 10000, owner: {name: 'Vova', age: 35, experience: 5}},
     {producer:"subaru", power: 250, year: 2017, price: 15000, owner: {name: 'Alex', age: 22, experience: 2}},
     {producer:"bmw", power: 125, year: 2005, price: 3000, owner: {name: 'Vasya', age: 52, experience: 15}},
     {producer:"Volkswagen", power: 250, year: 2015, price: 11000, owner: {name: 'Evgeniy', age: 30, experience: 10}},
     {producer:"mercedes", power: 350, year: 2010, price: 12200, owner: {name: 'Dima', age: 45, experience: 12}},
     {producer:"ford", power: 150, year: 2012, price: 8000, owner: {name: 'Yana', age: 32, experience: 1}},
     {producer:"Audi", power: 400, year: 2018, price: 20000, owner: {name: 'Lesya', age: 20, experience: 2}},

      ];

 function repeired() {
    for (i=0; i < myCars.length; i += 2) {
        myCars[i].power += myCars[i].power / 100 * 10;
        myCars[i].price += myCars[i].price / 100 * 5;
        myCars[i].owner.name = 'New driver';    
    
 }
        let owner = myCars.forEach(el => {
        if (el.owner.experience < 5 && el.owner.age > 25) {
                console.log(`${el.owner.name} - йди на курси!` );
                el.owner.experience += 1;
            }
        }              
        )
    }
 
 
repeired();
console.log(myCars);


 let sum = myCars.reduce((acc, curr) => {
   return acc + curr.price
 }, 0);

console.log(sum)


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
// Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. 
//Если такого элемента нет в массиве, выведите -1.

// Пример:
let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

let num = (item, array) => {
    let minIndex = array.indexOf(item);
    let maxIndex = array.lastIndexOf(item);
    console.log('min', minIndex, 'max', maxIndex);

return minIndex, maxIndex;
}

num(4, arr);

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.