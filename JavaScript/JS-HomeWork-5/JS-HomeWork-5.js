// - створити функцію яка виводить масив

// let getArray = (array) => console.log(array);
// getArray([1,2,3,4]);

// - створити функцію яка заповнює масив рандомними числами та виводить його. 
//Для виведення використати попвередню функцію.


// function randomArr(length, min, max) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//     	arr.push(Math.round(Math.random() * (max - min) + min));
//     }
//     return arr;
// }
// getArray(randomArr(10, 2, 200));

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNumber(a, b, c) {
//     let res = Math.min(a, b, c);
//     console.log(res);
//     return res;
//   }
// minNumber(0, 20, -8);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber(a, b, c) {
//     let res = Math.max(a, b, c);
//     console.log(res);
//     return res;
//   }
// maxNumber(0, 20, -8);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minMax() {
//    console.log(Math.max(...arguments));
//    return Math.min(...arguments);
//   }
//   minMax(0, 20, -8, -500, 13548, 0);

// - створити функцію яка виводить масив
// let getArray = (array) => console.log(array);
// getArray([1,2,3,4]);

// - створити функцію яка повертає найбільше число з масиву
// let arr = [0, 20, -8, -500, 8684777, 8684775];

// let max = (array) => Math.max(...array);
// console.log(max(arr));

// - створити функцію яка повертає найменьше число з масиву
// let min = (array) => Math.min(...array);
// console.log(min(arr));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let sum = (array) => {
//     let res = 0;
//     array.forEach(el => res += el);
//     console.log(res);
//     return res;
// }

// sum(arr);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let average = (array) => {
//     let sum = 0;
//     array.forEach(el => sum += el);
//     console.log(sum/array.length);
//     return sum/array.length;
// }
// average(arr);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, 
222,
'sdfghjk',
[2],
{
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}];

// let getNumObj = (array) => {
//     let count = 0;
//     array.forEach(el => {
//         if(typeof el === 'object' && !Array.isArray(el)) {
//             count++
//         }
//     })
//     console.log(count)
//     return count;
// }
// getNumObj(users);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let getNumOfKeys = (array) => {
//     let count = 0;
//     array.forEach(el => {
//         if(typeof el === 'object' && !Array.isArray(el)) {
//             for (let key in el) {
//                 count++
//             }
//         }
//     })
//     console.log(count)
//     return count;
// }
// getNumOfKeys(users);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// let array1 = [1,2,3,4];
// let array2 = [2,3,4,5];

// function getSumElem(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i] + arr2[i]);
//     }
//     console.log(result);
//     return result;
// }

// getSumElem(array1, array2)

//или

// let getSumElem2 = (arr1, arr2) => arr1.map((value, index)=> Number(value) + Number(arr2[index]));
// console.log(getSumElem2(array1, array2));


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function indexReplace (array, index) {
// 	const buffer = array[index];
//     array[index] = array[index + 1];
// 	array[index + 1] = buffer;
// 		console.log(array);
		
// 	}
	
// 	indexReplace(users, 3);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

////Вариант 0  не работает, потому что вырезает ноль и соседнее значение переносит на место нуля 
//и добраться к нему уже нельзя - индекс изменился
//////////////////////////////////////////////////////
// function arrReorder (array) {
//     for ( i = 0; i < array.length; i++)     {
// 			if (array[i] === 0) {
//            let zeroIndex = array.splice(i, 1);
// 				array.push(...zeroIndex);
// 			} 
		  
// 	  }
// 	 console.log(array);
// 	  return array;
// }
// arrReorder([0,0,1,0]);
////////////////////////////////////////////////////

// function zeroToEnd (array) {
//    let zero = [];
//    let number = [];
//    array.forEach((item) => item !== 0 ? number.push(item) : zero.push(item));
//    console.log([...number,...zero]);

//    return [...number,...zero];
// }

// zeroToEnd([0,0,1,0]);

//или

// let zeroToEnd2 = (array) => array.sort((a, b) => ((a-b) == a) ? -1 : 1);
// console.log(zeroToEnd2([0,1,2,3,4]))



// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// let addText = (text) => document.body.innerHTML = `<div>${text}</div>`;
// addText('Hello owu');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let addBlock = (tag, text) => {
//     let el = document.createElement(tag);
//     el.innerText = text;
//     document.getElementsByTagName('body')[0].appendChild(el);
// }

// addBlock('div', 'reysthfh');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars = [
   
     {name: 'Renault', age: 8,  color: 'grey', power: 250},
     {name: 'Audi', age: 1,  color: 'red', power: 320},
     {name: 'Mercedes', age: 15,  color: 'power', mileage: 275},
     {name: 'Peugeot', age: 4,  color: 'white', power: 350},
     {name: 'Volkswagen', age: 2,  color: 'black', power: 310},
     {name: 'BMW', age: 20,  color: 'green', power: 220},
     {name: 'skoda', age: 7,  color: 'silver', power: 280},
     {name: 'fiat', age: 14,  color: 'white', power: 250},
     {name: 'Citroen', age: 8,  color: 'red', power: 300},
     {name: 'Lexus', age:2,  color: 'black', power: 380}
  ]

// let addCars = (array, id) => {
//     let template = `<h4>Cars</h4>`; 
//         array.forEach(item => template += `<div><strong>${item.name}</strong> - ${item.age} years old, ${item.color} color, ${item.power} power </div>`);
//         document.getElementById(id).innerHTML = template;
// }

// addCars(cars, 'cars');

// Для кожної властивості створити всередені блока автомоблія свій блок

// let addCars2 = (array, id) => {
//     let template = `<h4>Cars</h4>`; 
//         array.forEach(item => template += `<div class="car">
//                                                 <div class="car__name">${item.name}</div>
//                                                 <div class="car__age"> ${item.age} years old</div>
//                                                 <div class="car__color">${item.color} color</div>
//                                                 <div class="car__power">${item.power} power</div>
//                                             </div>`);

//         document.getElementById(id).innerHTML = template;
// }

// addCars2(cars, 'cars');
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Масиви:
         let usersWithId = [
               {id: 1, name: 'vasya', age: 31, status: false},
               {id: 2, name: 'petya', age: 30, status: true},
               {id: 3, name: 'kolya', age: 29, status: true}, 
               {id: 4, name: 'olya', age: 28, status: false},
            ];

        let citiesWithId = [
              {user_id: 3, country: 'USA', city: 'Portland'},
              {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
              {user_id: 2, country: 'Poland', city: 'Krakow'},
              {user_id: 4, country: 'USA', city: 'Miami'},
            ];

// Частковий приклад реультату:

// function getUserInfo(array1, array2) {
//        array1.forEach(user => {
//           array2.forEach(address => {
//             if (user.id === address.user_id) {
//                 user.address = address;
//              }
//          })
//        })

//        console.log(array1);
// }

// getUserInfo(usersWithId, citiesWithId);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
// "


// function rules(title, body) {

// document.getElementsByClassName('container')[0].innerHTML += `<div class="rules">
//                                                                 <h2>${title}</h2>
//                                                                 <p>${body}</p>
//                                                              </div>`
// }

// rules('Седьмое правило Бойцовского клуба', 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.');
// rules('Восьмое и последнее правило Бойцовского клуба', 'Новичок обязан принять бой');


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

//------------

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

//--------------


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// let array = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// let result = array.flat(Infinity);
//     console.log(result);

// ===========додаткове========


// 1) создать функцию которая принимает массив и возвращает строку ([1, 2, 3, 4, 5, 6] -> "123456")
let getString = (array) => {
    let res = '';
    array.forEach(el => res += String(el));
    console.log(res);

    return res;
}

getString([1, 2, 3, 4, 5, 6]);

// 2) создать функцию которая принимает массив чисел и возвращает этот же массив,
// но каждый его элемент больше на 1 ([5,2,3] -> [6,3,4])

let getElPlus = (array) => array.map(el => el + 1);

console.log(getElPlus([5,2,3]));

// 3) создать функцию которая принимает число n, min, max
// и возвращает массив длиной n с случайными числами в диапазоне от min до max

function randomArr(n, min, max) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * (max - min) + min));
    }
    console.log(arr);

    return arr;
}

randomArr(10, 8, 500);

//4)  создать функцию которая принимает age и массив  (массив ниже или придумайте свой)
// и возвращает новый массив с теми юзерами которые совпадают по возрасту
const users2 = [
{id: 1, name: 'vasya', age: 31, status: false},
{id: 2, name: 'petya', age: 30, status: true},
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 30, status: false},
{id: 4, name: 'kira', age: 29, status: false},
{id: 4, name: 'marta', age: 30, status: false},
];
// Пример:
// someFunc(30, users) -> [
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 4, name: 'olya', age: 30, status: false},
//     {id: 4, name: 'marta', age: 30, status: false},
// ]
function getUserSameAge(age, array) {
    let arr = [];
    array.forEach(el => el.age == age && arr.push(el));
    console.log(arr);

    return arr;
}

getUserSameAge(29, users2)