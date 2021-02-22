// - создать 5 объектов. В каждом объекте не менее 3х полей. 
//Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )


// let dog = {name: 'Jeck', age: 4,  color: 'black'};
// let human = {gender: 'female', status: true, job: 'front-end'};
// let car = {brand: 'Volkswagen', tankValue: 270,  horsePower: 350};
// let flat = {floors: 16, rooms: 2,  balcony: true};
// let book = {title: 'JS', pages: 460,  description: 'About JS'};


// - создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... 
//Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

   // let house = {
   //      rooms: 5,
   //      color: ['white', 'orange'],
   //      lift: {cargo: false, passenger: true},
   //      roof: 'metal tile',
   //      overlappings: 'Monolithic' 
   //  };

   //  let driver = {
   //      name: 'Vasya',
   //      age: 40,
   //      experience: 10,
   //      drivingLicense: ['B', 'C'],
   //      history: {crash: false, fines: true}
   //  };

   //  let toy = {
   //      type: 'boll',
   //      material: 'leather',
   //      color: ['white', 'black'],
   //      condition: {boo: true, scratches: false, material: 'как новый'},
   //      age: 3-5
   //  };

   // let table = {
   //      form: 'oval',
   //      price: 5000,
   //      material: 'wood',
   //      type: ['для спальни', 'для гостинной'],
   //      characteristic: {wood: 'дуб', size: '55х35'}
   //  }

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(let i in dog) {
//       console.log(i);
//     }

// for(let i in human) {
//       console.log(i);

// }
// for(let i in car) {
//       console.log(i);
// }
// for(let i in flat) {
//       console.log(i);
// }
// for(let i in book) {
//       console.log(i);
// }
// for(let i in house) {
//       console.log(i);
// }
// for(let i in driver) {
//       console.log(i);
// }
// for(let i in toy) {
//       console.log(i);
// }
// for(let i in table) {
//       console.log(i);
// }
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(dog));
// console.log(Object.keys(human));
// console.log(Object.keys(car));
// console.log(Object.keys(flat));
// console.log(Object.keys(book));
// console.log(Object.keys(house));
// console.log(Object.keys(driver));
// console.log(Object.keys(toy));
// console.log(Object.keys(table));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [
   
//      {name: 'Renault', age: 8,  color: 'grey', power: 250},
//      {name: 'Audi', age: 1,  color: 'red', power: 320},
//      {name: 'Mercedes', age: 15,  color: 'power', mileage: 275},
//      {name: 'Peugeot', age: 4,  color: 'white', power: 350},
//      {name: 'Volkswagen', age: 2,  color: 'black', power: 310},
//      {name: 'BMW', age: 20,  color: 'green', power: 220},
//      {name: 'skoda', age: 7,  color: 'silver', power: 280},
//      {name: 'fiat', age: 14,  color: 'white', power: 250},
//      {name: 'Citroen', age: 8,  color: 'red', power: 300},
//      {name: 'Lexus', age:2,  color: 'black', power: 380}
//   ]
//    console.log(cars);

//- Создать массив объектов cities и заполнить его объектами с полями 
//название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//       {name: 'Kiev', population: 2884000, country: 'Ukraine',  region: 'Kiev'},
//       {name: 'Myronivka', population: 15000, country: 'Ukraine',  region: 'Kiev'},
//       {name: 'Helsinki', population: 631695, country: 'Finland',  region: 'Helsinki'},
//       {name: 'Tampere', population: 213220, country: 'Finland',  region: 'Tampere'},
//       {name: 'Lviv', population: 721301, country: 'Ukraine',  region: 'Lviv'}
// ]

// - Создать массив объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет, водитель. 
//Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let driver = {
//       name: 'Evgeniy',
//       age: 30,
//       gender: 'male',
//       experience: 10
// }

// let cars = [
//       driver,
//      {name: 'Renault', age: 8,  color: 'grey', power: 250},
//      {name: 'Audi', age: 1,  color: 'red', power: 320},
//      {name: 'Mercedes', age: 15,  color: 'power', mileage: 275},
//      {name: 'Peugeot', age: 4,  color: 'white', power: 350},
//      {name: 'Volkswagen', age: 2,  color: 'black', power: 310},
//      {name: 'BMW', age: 20,  color: 'green', power: 220},
//      {name: 'skoda', age: 7,  color: 'silver', power: 280},
//      {name: 'fiat', age: 14,  color: 'white', power: 250},
//      {name: 'Citroen', age: 8,  color: 'red', power: 300},
//      {name: 'Lexus', age:2,  color: 'black', power: 380}
//   ]
//    console.log(cars);
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < cars.length) {
//       console.log(cars[i]);
//       i++;
// }
// let j = 0;
// while (j < cities.length) {
//       console.log(cities[j]);
//       j++;
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++) {
//       console.log(i)
// }

// for (let j = 0; j < cities.length; j++) {
//       console.log(j)
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let i of cars) {
//       console.log(i)
// }

// for (let i of cities) {
//       console.log(i)
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let dog = {name: 'Jeck', age: 4,  color: 'black'};
// let human = {gender: 'female', status: true, job: 'front-end'};
// let car = {brand: 'Volkswagen', tankValue: 270,  horsePower: 350};
// let flat = {floors: 16, rooms: 2,  balcony: true};
// let book = {title: 'JS', pages: 460,  description: 'About JS'};

// let a = JSON.stringify(dog);
// console.log(a);

// let b = JSON.stringify(human);
// console.log(b);

// let c = JSON.stringify(car);
// console.log(c);

// let d = JSON.stringify(flat);
// console.log(d);

// let e = JSON.stringify(book);
// console.log(e);

// - взять json из задания 11 и превратить их обратно в объекты.
// console.log(JSON.parse(a));
// console.log(JSON.parse(b));
// console.log(JSON.parse(c));
// console.log(JSON.parse(d));
// console.log(JSON.parse(e));

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .


// let cars = [
   
//      {name: 'Renault', age: 8,  color: 'grey', power: 250},
//      {name: 'Audi', age: 1,  color: 'red', power: 320},
//      {name: 'Mercedes', age: 15,  color: 'power', mileage: 275},
//      {name: 'Peugeot', age: 4,  color: 'white', power: 350},
//      {name: 'Volkswagen', age: 2,  color: 'black', power: 310},
//      {name: 'BMW', age: 20,  color: 'green', power: 220},
//      {name: 'skoda', age: 7,  color: 'silver', power: 280},
//      {name: 'fiat', age: 14,  color: 'white', power: 250},
//      {name: 'Citroen', age: 8,  color: 'red', power: 300},
//      {name: 'Lexus', age:2,  color: 'black', power: 380}
//   ]
  

// for (let i of cars) {
//       console.log(JSON.stringify(i));
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities = [
//       {name: 'Kiev', population: 2884000, country: 'Ukraine',  region: 'Kiev'},
//       {name: 'Myronivka', population: 15000, country: 'Ukraine',  region: 'Kiev'},
//       {name: 'Helsinki', population: 631695, country: 'Finland',  region: 'Helsinki'},
//       {name: 'Tampere', population: 213220, country: 'Finland',  region: 'Tampere'},
//       {name: 'Lviv', population: 721301, country: 'Ukraine',  region: 'Lviv'}
// ]

// for (let i of cities) {
//       console.log(JSON.stringify(i));
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let arr = [];
// let cars = [
   
//      {name: 'Renault', age: 8,  color: 'grey', power: 250},
//      {name: 'Audi', age: 1,  color: 'red', power: 320},
//      {name: 'Mercedes', age: 15,  color: 'power', mileage: 275},
//      {name: 'Peugeot', age: 4,  color: 'white', power: 350},
//      {name: 'Volkswagen', age: 2,  color: 'black', power: 310},
//      {name: 'BMW', age: 20,  color: 'green', power: 220},
//      {name: 'skoda', age: 7,  color: 'silver', power: 280},
//      {name: 'fiat', age: 14,  color: 'white', power: 250},
//      {name: 'Citroen', age: 8,  color: 'red', power: 300},
//      {name: 'Lexus', age:2,  color: 'black', power: 380}
//   ]
  
// for (let i of cars) {
//       arr.push(JSON.stringify(i));
// }

// console.log(arr);

// - Создать массив пользователей. 
//У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//                      {name: 'vasya', age: 31, skills: ['html', 'css', 'js']},
//                      {name: 'petya', age: 30, skills: ['js', 'node.js', 'react', 'angular']},
//                      {name: 'kolya', age: 29, skills: ['html', 'css']},
//                      {name: 'olya', age: 28, skills: ['php', 'c++']},
//                      {name: 'max', age: 30, skills: ['js', 'vue', 'react', 'angular']}
                   
// ]
// for (let i of users) {
//      for (let j of i.skills) {
//             console.log(j)
//      }

//      console.log('----------------')
// }


// - Создать массив пользователей. 
//У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
// let array = [];

// let users = [
//                      {name: 'vasya', age: 31, skills: ['html', 'css', 'js']},
//                      {name: 'petya', age: 30, skills: ['js', 'node.js', 'react', 'angular']},
//                      {name: 'kolya', age: 29, skills: ['html', 'css']},
//                      {name: 'olya', age: 28, skills: ['php', 'c++']},
//                      {name: 'max', age: 30, skills: ['js', 'vue', 'react', 'angular']}
                   
// ]
// for (let i of users) {
//      for (let j of i.skills) {
//           array.push(j)
//      }
// }

// console.log(array)


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users2 = [
//       {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//       {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//       {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//       {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//       {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

// for (let i of users2) {
//      for (let j of i.skills) {
//             console.log(j)
//      }
//      console.log('----------------')
// }


// - З масиву users за допомогою циклу витягнути адреси користувачів
// і записати (скопіювати) їх в інший порожній масив.

//       let users = [{
//                                  name: 'vasya',
//                                  age: 31,
//                                  status: false,
//                                  address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//                            }, {
//                                  name: 'petya',
//                                  age: 30,
//                                  status: true,
//                                  address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//                            }, {
//                                  name: 'kolya',
//                                  age: 29,
//                                  status: true,
//                                  address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//                            }, {
//                                  name: 'olya',
//                                  age: 28,
//                                  status: false,
//                                  address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//                            }, {
//                                  name: 'max',
//                                  age: 30,
//                                  status: true,
//                                  address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//                            }, {
//                                  name: 'anya',
//                                  age: 31,
//                                  status: false,
//                                  address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//                            }, {
//                                  name: 'oleg',
//                                  age: 28,
//                                  status: false,
//                                  address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//                            }, {
//                                  name: 'andrey',
//                                  age: 29,
//                                  status: true,
//                                  address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//                            }, {
//                                  name: 'masha',
//                                  age: 30,
//                                  status: true,
//                                  address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//                            }, {
//                                  name: 'olya',
//                                  age: 31,
//                                  status: false,
//                                  address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//                            }, {
//                                  name: 'max',
//                                  age: 31,
//                                  status: true,
//                                  address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//                            }];

// let address = [];

// for (let i of users) {
//    address.push(i.address);
//      }
//   console.log(address)

// - За допомоги циклу проітерувати  масив users, 
//записати кожного юзера в сівй блок за допомоги document.createElement. 
//Всі данні в одному блоці.

// let content = document.getElementById('content');
// let block = document.createElement("div");

// for (let i of users) {
//   block.innerHTML += `<h2>${i.name}</h2>
//             <p>${i.age} років</p>
//             <p>Статус - ${i.status}</p>
//             <p>Адреса: ${i.address.country}, ${i.address.city}, ${i.address.street} ${i.address.houseNumber} </p>`
//      }

// content.appendChild(block);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// let content = document.getElementById('content');
// let block = document.createElement("div");

// for (let i of users) {
//   block.innerHTML += `<div class="block__title">${i.name}</div>
//                       <div class="block__age">${i.age} років</div>
//                       <div class="block__status">Статус - ${i.status}</div>
//                       <div class="block__address">Адреса: ${i.address.country}, ${i.address.city}, ${i.address.street} ${i.address.houseNumber} </div>`
//      }

// content.appendChild(block);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let content = document.getElementById('content');
// let block = document.createElement("div");

// for (let i of users) {
//   block.innerHTML += `<div class="block__title">${i.name}</div>
//                       <div class="block__age">${i.age} років</div>
//                       <div class="block__status">Статус - ${i.status}</div>
//                       <div class="block__address">
//                         <div>Адреса:</div>
//                         <div>${i.address.country}</div>
//                         <div>${i.address.city}</div>
//                         <div>${i.address.street}</div>
//                         <div>${i.address.houseNumber}</div>
//                      </div>`
//      }

// content.appendChild(block);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
      //    let usersWithId = [
      //          {id: 1, name: 'vasya', age: 31, status: false},
      //          {id: 2, name: 'petya', age: 30, status: true},
      //          {id: 3, name: 'kolya', age: 29, status: true}, 
      //          {id: 4, name: 'olya', age: 28, status: false},
      //       ];

      //   let citiesWithId = [
      //         {user_id: 3, country: 'USA', city: 'Portland'},
      //         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
      //         {user_id: 2, country: 'Poland', city: 'Krakow'},
      //         {user_id: 4, country: 'USA', city: 'Miami'},
      //       ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


// let concatArray = [];
// for (let i of usersWithId) {
//      for (let j of citiesWithId) {
//            if (i.id === j.user_id) {
//              i.address = j;
//                }
//           }
//      concatArray.push(i);
// }
// console.log(concatArray)

//ИЛИ

// let result = usersWithId.map((item, index)=> {
//       let res;
//       citiesWithId.forEach( (user) => {
//           if(item.id == user.user_id){
//                 item.address = user;
//                 res = {...item};
//           }
//       })

//       return res;
//   })
//   console.log(result)

// - створити розмітці блок з id, class та текстом в середені. 
//Зчитати окремо цей текст з селекторів по id, class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let textId = document.getElementById('text');
// console.log(textId.innerText);
// textId.innerText = 'TEXT TEXT TEXT';
// console.log(textId.innerText);
// textId.style.width = '500px';
// textId.style.height = '100px';
// textId.style.background = 'blue'



// let textClass = document.getElementsByClassName('classText')[0];
// console.log(textClass.innerText);
// textClass.innerText = 'TEXT TEXT TEXT';
// console.log(textClass.innerText);
// textClass.style.width = '500px';
// textClass.style.height = '100px';


// let textTag = document.getElementsByTagName('div')[1];
// console.log(textTag.innerText);
// textTag.innerText = 'TEXT TEXT TEXT';
// console.log(textTag.innerText);
// textTag.style.width = '500px';
// textTag.style.height = '100px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let text = document.getElementById('text');
// let table = document.createElement('table');
// table.innerHTML = `<tbody>
//                         <tr>
//                               <td>1</td>
//                               <td>2</td>
//                               <td>3</td>
//                         </tr>
//                   </tbody>`
// text.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let text = document.getElementById('text');
// let table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//    let tr =  table.appendChild(document.createElement('tr'));
//    tr.innerHTML = `<td>1</td>
//                    <td>2</td>
//                    <td>3</td>`;
// }

// text.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let text = document.getElementById('text');

// let table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//       let tr =  table.appendChild(document.createElement('tr'));
//             for (let j = 0; j < 5; j++) {
//                   let td = tr.appendChild(document.createElement('td'));
//                           td.innerText = j + 1;
//                           td.style.border = "1px solid grey";
//                           td.style.padding = "10px";
//                        }
// }
// text.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю
//на n рядків з m ячейками всередені. n та m отримати з prompt
 
// let table = document.createElement('table');

// let m = +prompt('Введіть к-ть рядків таблиці');
// let n = +prompt('Введіть к-ть комірок в рядку');
// for (let i = 0; i < m; i++) {
//       let tr =  table.appendChild(document.createElement('tr'));
//             for (let j = 0; j < n; j++) {
//                   let td = tr.appendChild(document.createElement('td'));
//                           td.innerText = j + 1;
//                           td.style.border = "1px solid grey";
//                           td.style.padding = "10px";
//                        }
// }
// text.appendChild(table);


// --Завантажити з мережі будь-який шаблон сайту. 
//Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

//файл landing.html + landing.js

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. 
//Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки,
// та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let content = document.getElementById('content');
// let subHeader = document.getElementsByTagName('h2');
// let list = document.createElement("ul");

// for (let i of subHeader) {
//    let listItem = document.createElement('li');
//    list.appendChild(listItem);
//    listItem.innerText = i.innerText;
// }

// content.appendChild(list);

// -Є масив котрий характеризує правила. 
//Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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


// let wrapJs = document.getElementById('wrapJs');

// for (let i = 0; i < rules.length; i++) {
//  wrapJs.innerHTML += `<div class="rules rule${i + 1}">
//                         <h2>${rules[i].title}</h2>
//                         <p>${rules[i].body}</p>
//                       </div>`
//     }


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. 
//За допомогою document.createElement вивести їх в браузер. 
//Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

// let wrapJs = document.getElementById('wrapJs');

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => {
//       json.forEach(el => {
//       wrapJs.innerHTML += `<div class="user">
//                                   <p>${el.id}</p>
//                                   <h4>${el.name} (${el.username}) </h4>
//                                   <p>email: ${el.email}</p>
//                                   <p>phone: ${el.phone}</p>
//                                   <p>website: ${el.website}</p>
//                                   <div class="user__address">
//                                     ${el.address.street} ${el.address.suite}, ${el.address.city} <br>
//                                     ${el.address.zipcode}
//                                   </div>
//                                   <div class="user__geo">
//                                    ${el.address.geo.lat},  ${el.address.geo.lng},
//                                   </div>
//                                   <div class="user__company">
//                                     <strong>${el.company.name}</strong> <br>
//                                     ${el.company.catchPhrase} <br>
//                                     ${el.company.bs} 
//                                   </div>
//                               </div>`
//       })
//   })



// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) 
//в свій блок (блок в блоці).


// let wrapJs = document.getElementById('wrapJs');

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => {
//       json.forEach(el => {
//       wrapJs.innerHTML += `<div class="post" id="${el.id}">
//                               <div class="post__title">
//                                     <h4><span>${el.userId}</span> ${el.title}</h4>
//                                </div>
//                               <div class="post__body">
//                                     <p>${el.body}</p>
//                               </div>
//                         </div>`
//       })
//   })


// *** за допомогою fetch (як в прикладі)
// отримати від jsonplaceholder всі comments.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// let wrapJs = document.getElementById('wrapJs');

// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => response.json())
//   .then(json => {
//       json.forEach(el => {
//       wrapJs.innerHTML += `<div class="comment" id="${el.id}">
//                               <div class="user__name">
//                                     <h4>${el.name}</h4>
//                               </div>
//                               <div class="user__email">
//                                     <a href="mailto:${el.email}">${el.email}</a>
//                               </div>
//                               <div class="user__body">
//                                     <p>${el.body}</p>
//                               </div>
//                            </div>`
//       })
//   })


// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту

let getPosts = async() => {
      let posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
      let comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());
      let template = ``;

      posts.forEach(post => {
            template += `<div class="post" id="${post.id}">
                              <div class="post__title">
                                    <h4>${post.title}</h4>
                              </div>
                              <div class="post__body">
                                    <p>${post.body}</p>
                              </div>
                             
                              <h5><b>Комментарии:</b></h5>
                                    <ul> `

                              comments.forEach(comment => {
                                     if (post.id === comment.postId) {
                                          template += `<li class="comment">
                                                                 <div class="comment__name"><strong>${comment.name}</strong></div>
                                                                 <div class="comment__email">${comment.email}</div>
                                                                 <div class="comment__body">${comment.body}</div>
                                                              </li>`
                                   }
                             })
           
                       template += `</ul></div>`
      })
      wrapJs.innerHTML = template;
}

getPosts();


/////////////////////////////
//не вийшло, тому що fetch асинхроний
///////////////////////////
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(posts => {
//       let template = ``;
//       posts.forEach(post => {
//             template += `<div class="post" id="${post.id}">
//                               <div class="post__title">
//                                     <h4>${post.title}</h4>
//                               </div>
//                               <div class="post__body">
//                                     <p>${post.body}</p>
//                               </div>
                             
//                               <h5><b>Комментарии:</b></h5>
//                                     <ul> `

//                   fetch('https://jsonplaceholder.typicode.com/comments')
//                   .then(response => response.json())
//                   .then(comments => {
//                         comments.forEach(comment => {
//                                if (post.id === comment.postId) {
//                                     template += `<li class="comment">
//                                                       <div class="comment__name"><strong>${comment.name}</strong></div>
//                                                       <div class="comment__email">${comment.email}</div>
//                                                       <div class="comment__body">${comment.body}</div>
//                                                    </li>`
//                         }
//                   })

//             template += `</ul></div>`
               
//               })
//            })
//         wrapJs.innerHTML = template;
//       })
            

   
  
