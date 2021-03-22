// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// function Tag(title, action, attrs) {
//     this.title = title;
//     this.action = action;
//     this.attrs = attrs;
// }

// function Attr(name, action) {
//     this.name = name;
//     this.action = action;
// }

// let href = new Attr('href', 'Задает адрес документа, на который следует перейти');
// let title = new Attr('title', 'Добавляет всплывающую подсказку к тексту ссылки');
// let a = new Tag('a', 'предназначен для создания ссылок', [href, title]);
// console.log(a);

// let alignDiv = new Attr ('align', 'Задает выравнивание содержимого тега <div>.');
// let titleDiv = new Attr ('title', 'Добавляет всплывающую подсказку к содержимому.');
// let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//   [alignDiv, titleDiv]);
// console.log(div);


// let alignH1 = new Attr ('align', 'Определяет выравнивание заголовка.');
// let h1 = new Tag('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня', alignH1 );
// console.log(h1);

// let classSpan = new Attr ('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
// let idSpan = new Attr ('id', 'Указывает имя стилевого идентификатора.');
// let styleSpan = new Attr ('style', 'Применяется для определения стиля элемента с помощью правил CSS.');
// let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.',
//   [classSpan, idSpan, styleSpan]);
// console.log(span);


// let alignInput = new Attr ('align', 'Определяет выравнивание изображения.');
// let formInput = new Attr ('form', 'Связывает поле с формой по её идентификатору.');
// let input = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//   [alignInput, formInput]);
// console.log(input);


// let methodForm = new Attr ('method', 'Метод протокола HTTP');
// let nameForm = new Attr ('name', 'Имя формы');
// let form = new Tag('form', 'устанавливает форму на веб-странице', [alignInput, formInput]);
// console.log(form);

// let valueOption = new Attr ('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
// let labelOption = new Attr ('label', 'Указание метки пункта списка.');
// let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//   [valueOption, labelOption]);
// console.log(option);

// let formSelect = new Attr ('form', 'Связывает список с формой.');
// let nameSelect = new Attr ('name', 'Имя элемента для отправки на сервер или обращения через скрипты.');
// let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//   [formSelect, nameSelect]);
// console.log(select);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

class TagsClass {
  constructor(name, action, attributes) {
    this.name = name;
    this.action = action;
    this.attributes = attributes; 
   }
  }

  class Attr {
    constructor(name, action) {
        this.name = name;
        this.action = action;
    }
}


let href = new Attr('href', 'Задает адрес документа, на который следует перейти');
let title = new Attr('title', 'Добавляет всплывающую подсказку к тексту ссылки');
let a = new TagsClass('a', 'предназначен для создания ссылок', [href, title]);
console.log(a);

let alignDiv = new Attr ('align', 'Задает выравнивание содержимого тега <div>.');
let titleDiv = new Attr ('title', 'Добавляет всплывающую подсказку к содержимому.');
let div = new TagsClass('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',  [alignDiv, titleDiv]);
console.log(div);


let alignH1 = new Attr ('align', 'Определяет выравнивание заголовка.');
let h1 = new TagsClass('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня', alignH1 );
console.log(h1);

let classSpan = new Attr ('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
let idSpan = new Attr ('id', 'Указывает имя стилевого идентификатора.');
let styleSpan = new Attr ('style', 'Применяется для определения стиля элемента с помощью правил CSS.');
let span = new TagsClass('span', 'Тег <span> предназначен для определения строчных элементов документа.',
  [classSpan, idSpan, styleSpan]);
console.log(span);


let alignInput = new Attr ('align', 'Определяет выравнивание изображения.');
let formInput = new Attr ('form', 'Связывает поле с формой по её идентификатору.');
let input = new TagsClass('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
  [alignInput, formInput]);
console.log(input);


let methodForm = new Attr ('method', 'Метод протокола HTTP');
let nameForm = new Attr ('name', 'Имя формы');
let form = new TagsClass('form', 'устанавливает форму на веб-странице', [alignInput, formInput]);
console.log(form);

let valueOption = new Attr ('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
let labelOption = new Attr ('label', 'Указание метки пункта списка.');
let option = new TagsClass('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
  [valueOption, labelOption]);
console.log(option);

let formSelect = new Attr ('form', 'Связывает список с формой.');
let nameSelect = new Attr ('name', 'Имя элемента для отправки на сервер или обращения через скрипты.');
let select = new TagsClass('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
  [formSelect, nameSelect]);
console.log(select);


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
    model: 'Jetta',
    manufacturer: 'Volkswagen',
    year: 2015,
    maxSpeed: 200, 
    volume: 2,
  
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        },
    info: function () {
            console.log(`Модель: ${this.model}; Виробник: ${this.manufacturer}; Рік випуску: ${this.year}; Максимальна швидкість: ${this.maxSpeed}; Об'єм двигуна:  ${this.volume}`);
             },
       
    increaseMaxSpeed: function (newSpeed)  {
           this.maxSpeed = newSpeed;
           console.log( this.maxSpeed)
            }, 
       
    changeYear: function (newValue) {
           this.year = newValue;
           console.log(this.year)

            },
       
    addDriver: function(driver) {
           this.driver = driver;
           console.log(this.driver);
           }
       }

car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear(2020);
car.addDriver('Yana');

// CLASS

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Car(model,  manufacturer, year, maxSpeed, volume) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.volume = volume;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
  this.info = function () {
        console.log(`Модель: ${this.model}; Виробник: ${this.manufacturer}; Рік випуску: ${this.year}; Максимальна швидкість: ${this.maxSpeed}; Об'єм двигуна:  ${this.volume}`);
         };
  this.increaseMaxSpeed =  function (newSpeed)  {
       this.maxSpeed = newSpeed;
       console.log( this.maxSpeed)
        };
  this.changeYear = function (newValue) {
       this.year = newValue;
       console.log(this.year)
        };
  this.addDriver = function(driver) {
       this.driver = driver;
       console.log(this.driver);
       }
}

let Volkswagen = new Car ('Jetta', 'Volkswagen', 2015, 200, 2);
console.log(Volkswagen);
Volkswagen.increaseMaxSpeed(240);
Volkswagen.changeYear(2020);
Volkswagen.addDriver({name: 'Vova', rightsСategory: 'B', experience: '7'});
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class CarClass {
  constructor(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year; 
    this.maxSpeed = maxSpeed;  
    this.volume = volume; 
   }
  drive () {
     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
     }
  info () {
    console.log(`Модель: ${model}; Виробник: ${manufacturer}; Рік випуску: ${year}; Максимальна швидкість: ${maxSpeed}; Об'єм двигуна: ${volume}`);
 }
  
 increaseMaxSpeed (newSpeed)  {
   this.maxSpeed = newSpeed;
 }
 
 changeYear (newValue) {
   this.year = newValue;
 }
 
  addDriver (driver) {
   this.driver = driver;
  }
}

let Volkswagen2 = new CarClass ('Jetta', 'Volkswagen', 2015, 200, 2);
console.log(Volkswagen2);
Volkswagen2.increaseMaxSpeed(240);
Volkswagen2.changeYear(2020);
Volkswagen2.addDriver({name: 'Vova', rightsСategory: 'B', experience: '7'});

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Popelushka {
  constructor(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size; 
   }
  }

let p1 = new  Popelushka('Yana', 20, 38);
let p2 = new  Popelushka('Sasha', 15, 40);
let p3 = new  Popelushka('Lilya', 40, 39);
let p4 = new  Popelushka('Sofa', 33, 36);
let p5 = new  Popelushka('Vika', 22, 37);
let p6 = new  Popelushka('Olya', 27, 38);
let p7 = new  Popelushka('Anna', 18, 35);
let p8 = new  Popelushka('Tanya', 60, 36);
let p9 = new  Popelushka('Ruslana', 45, 41);
let p10 = new  Popelushka('Ivanka', 14, 38);

let pArr = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

class Prince {
  constructor(name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe; 
  }
  search (array) {
    array.forEach(el => el.size === this.shoe && console.log(`Моя попелюшка ${el.name}, ${el.age} років`))
       }}

let Evgeniy = new Prince ('Evgeniy', 30, 35);
Evgeniy.search(pArr);

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function PopelushkaNew (name, age, size) {
  this.name = name;
  this.age = age;
  this.size = size;
}
let girlArray = [];

let girl1 = new  PopelushkaNew('Yana', 20, 38);
let girl2 = new  PopelushkaNew('Sasha', 15, 40);
let girl3 = new  PopelushkaNew('Lilya', 40, 39);
let girl4 = new  PopelushkaNew('Sofa', 33, 36);
let girl5 = new  PopelushkaNew('Vika', 22, 37);
let girl6 = new  PopelushkaNew('Olya', 27, 38);
let girl7 = new  PopelushkaNew('Anna', 18, 35);
let girl8 = new  PopelushkaNew('Tanya', 60, 36);
let girl9 = new  PopelushkaNew('Ruslana', 45, 41);
let girl10 = new  PopelushkaNew('Ivanka', 14, 38);

girlArray.push(girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10);

function PrinceNew (name, age, shoe) {
  this.name = name;
  this.age = age;
  this.shoe = shoe;
  this.search = function(array) {
    array.forEach(el => el.size === this.shoe && console.log(`Моя попелюшка ${el.name}, ${el.age} років`))
  }
}

let Vova = new PrinceNew ('Vova', 30, 35);
Vova.search(girlArray);