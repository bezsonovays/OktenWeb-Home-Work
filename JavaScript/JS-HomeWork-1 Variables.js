// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
// let status1 = true;
// let status2 = false;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(hello); alert(hello); document.write(hello);
// console.log(owu); alert(owu); document.write(owu);
// console.log(com); alert(com); document.write(com);
// console.log(ua); alert(ua); document.write(ua);
// console.log(num1); alert(num1); document.write(num1);
// console.log(num2); alert(num2); document.write(num2);
// console.log(num3); alert(num3); document.write(num3);
// console.log(num4); alert(num4); document.write(num4);
// console.log(num5); alert(num5); document.write(num5);
// console.log(num6); alert(num6); document.write(num6);
// console.log(num7); alert(num7); document.write(num7);
// console.log(status1); alert(status1); document.write(status1);
// console.log(status2); alert(status2); document.write(status2);


// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
 // hello = 'Привіт';
 // owu = 'oktenWeb';
 // com = 'ком';
 // ua = 'юа';
 // num1 = 100;
 // num2 = 246575610;
 // num3 = 'три';
 // num4 = -555;
 // num5 = 'Pi';
 // num6 = 444;
 // num7 = '16';
 // status1 = false;
 // status2 = true;

//   Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(hello); alert(hello); document.write(hello);
// console.log(owu); alert(owu); document.write(owu);
// console.log(com); alert(com); document.write(com);
// console.log(ua); alert(ua); document.write(ua);
// console.log(num1); alert(num1); document.write(num1);
// console.log(num2); alert(num2); document.write(num2);
// console.log(num3); alert(num3); document.write(num3);
// console.log(num4); alert(num4); document.write(num4);
// console.log(num5); alert(num5); document.write(num5);
// console.log(num6); alert(num6); document.write(num6);
// console.log(num7); alert(num7); document.write(num7);
// console.log(status1); alert(status1); document.write(status1);
// console.log(status2); alert(status2); document.write(status2);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// let name = prompt('Введіть Ваше імя');
// let lastName = prompt('Введіть Ваше Прізвище');
// let age = prompt('Введіть Ваш вік');

//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// document.write(`Вітаю ${name} ${lastName}. Тобі ${age} років`);

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let result = name + lastName + age;

// - За допомогою prompt() отримати 3 числа.
// Привести їх до числа (Google "String to number JS").
// Вивести їх в консоль.

// let n1 = +prompt('Введіть перше число');
// let n2 = +prompt('Введіть друге число');
// let n3 = +prompt('Введіть третє число');

// console.log(n1, n2, n3);


// - За допомогою prompt() отримати 4 числа. 
//Привести їх до числа за допомогою paeseInt.
// Додати їх всі мож собою і результат вивести в консоль.

// let a = parseInt(prompt('Введіть перше число'));
// let b = parseInt(prompt('Введіть друге число'));
// let c = parseInt(prompt('Введіть третє число'));
// let d = parseInt(prompt('Введіть четверте число'));

// let result2 = a + b + c + d;
// console.log(result2);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 

// let one = parseFloat(prompt('Введіть перше число'));
// let two = parseFloat(prompt('Введіть друге число'));
// let three = parseFloat(prompt('Введіть третє число'));
// let four = parseFloat(prompt('Введіть третє число'));

//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let result = one + two + three + four;
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою.
// Заокруглити їх (Google "round number JS"). 
//Просумувати їх між собою. Результат вивести в консоль.

// let n1 = Math.round(prompt('Введіть перше число'));
// let n2 = Math.round(prompt('Введіть друге число'));
// let n3 = Math.round(prompt('Введіть третє число'));

// let result = n1 + n2 + n3;
// console.log(result);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня.
// Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 

// let firstNum = Math.round(prompt('Введіть перше число'));
// let secondNum = Math.round(prompt('Введіть друге число'));

// let resultPow = Math.pow(firstNum, secondNum);
// console.log(resultPow);



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 < 6 -> true
//     5 === 6 -> false
//     5 > 6 -> false
//     5 >= 6 -> false
//     10 === 10 -> true
//     10 == 10 -> true
//     10 !== 10 -> false
//     10 > 10 -> false
//     10 < 10 -> false
//     123 === '123' -> false
//     123 =='123' -> true

// Додатково:
// - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
//  console.log(132 > 100 && 45 < 12 );  false
//   console.log(34 > 33 && 23 < 90 );  true
//   console.log(99 > 100 && 45 > 12 ); false
//   console.log(132 > 100 || 45 < 12 ); true
//   console.log(111 > 11 || 45 < 111 );  true
//   console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
//   console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
//   console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
//   console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
//   console.log(!!'-1'); true
//   console.log(!!-1); true
//   console.log(!!'0'); true
//  console.log(!!'null'); true
  // console.log(!!'undefined'); true
//   console.log(!!(3/'owu')); false
//   console.log((111 > 11 || 45 < 111) ||  !!'0'); true
//   console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false

// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори. 
//     Example: 88 = (16 / 2) * 11

// let a1 = 5 * 6 + 4; 
// console.log(a1);

// let a2 = (70 + 2) / 6; 
// console.log(a2);

// let a3 = (525 * 0.5) - 196.5; 
// console.log(a3);

// let a4 = 18 / 2 * 10;
// console.log(a4);

// let a5 = 40 + 50 - 3;
// console.log(a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// let a6 =  5 % 3; 
// console.log(a6);

// let a7 = 3 % 5;
// console.log(a7);

// let a8 =  5 + '3'; 
// console.log(a8);

// let a9 =  '5' - 3;
// console.log(a9);

// let a10 =  75 + 'кг';
// console.log(a10);


// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10;

// let s = height * width;
// console.log('Площа прямокутника - ' + s + 'см');

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;

// let vC = 3.14 * Math.pow((dC / 2), 2) * heightC;
// console.log(vC);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;

// let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2)) ;
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world';
// console.log(str); 
// alert(str); 
// document.write(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let fio = 'Яна Килимиста';
// let age = 30;
// let hobby = 'running';

// alert(fio + '\r\n' + age + '\r\n' + hobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?'
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); - 205 -  при конкатинации со string = string
//      document.write(str - a + "<br/>"); - 15 -  математ. операция = number
//      document.write(str * "2" + "<br/>"); - 40 -  математ. операция = number
//      document.write(str / 2 + "<br/>"); - 10  математ. операция = number


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")  3
//     parseInt("-7.875") -7
//     parseInt("435") 435
//     parseInt("Вася") NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let n1 = +prompt('Enter 1 number');
// let n2 = +prompt('Enter 2 number');
// alert(n1 + n2);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let name2 = prompt('Введите ваше Имя');
// let lastname2 = prompt('Введите вашу Фамилию');
// let age2 = prompt('Введите ваш возраст');
// document.write(`Доброго вечера  ${name2}  ${lastname2}, мои поздравления что вам ${age2}`);



// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//  let a = +prompt('Число 1');
//  let b = +prompt('Число 2');
//  let c = +prompt('Число 3');

// if (a < b  && b < c) {
//     console.log (a, b, c);
//     } else if (a < c && c < b) {
//     console.log (a, c, b);
//     } else if ( b < a && a < c) {
//     console.log (b, a, c);
//     } else if (b < c && c < a) {
//     console.log (b, c, a);
//     } else if (c < a && a < b) {
//     console.log (c, a, b);
//     } else if (c < b && b < a) {
//     console.log (c, b, a);
//    } else {
//     console.log ('ta tam');
// }


// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

//  let trafficLight = prompt('Введіть колір світофора');

//  switch (trafficLight) {
//     case 'зелений': console.log('йди');
//     break;
//     case 'жовтий': console.log('почекай');
//     break;
//     case 'червоний': console.log('cтій');
//     break;
//     default:
//         console.log ('роби що хочеш');
//  }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let trafficLight = prompt('Введите цвет светофора');
let traffic = confirm ('Есть на дороге машины?');


if ( trafficLight == 'зеленый' && isRoadClear == false) {
    document.write ('иди');
} else if (trafficLight == 'зеленый' && isRoadClear) {
    document.write ('подожди пока нарушители проедут');
} else if (trafficLight == 'желтый' && isRoadClear) {
    document.write ('жди');
} else if (trafficLight == 'желтый' && isRoadClear == false) {
    document.write ('все рано жди');
} else if (trafficLight == 'красный' && isRoadClear) {
    document.write ('стой и жди');
} else if (trafficLight == 'красный' && isRoadClear == false) {
    document.write ('стой все рано');
} else {
    document.write ('делай что хочешь');
}