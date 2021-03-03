// - Создать произвольный елемент с id = text. 
// Используя JavaScript, сделайте так, 
//чтобы при клике на кнопку исчезал элемент с id="text".

let btn = document.getElementsByTagName('button');

//btn[0].onclick = () => document.getElementById('text').style.display = 'none';

//или 

// let text = document.getElementById('text');
// btn[0].onclick = () => text.hidden ? text.hidden = false : text.hidden = true;

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// btn[0].onclick = () => btn[0].style.display = 'none';

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let inputs = document.getElementsByTagName('input');

// btn[1].onclick = () => inputs[0].value <ul 18 ? console.log('Ви неповнолітній') : console.log('Вам є 18');


//- Создайте меню, которое раскрывается/сворачивается при клике 
let link = document.getElementById('link');
let subMenu = document.getElementById('subMenu');
let flag = false;

link.onclick = () => {
    if(flag) {
        subMenu.style.display = 'none';
        flag = false;
    } else {
        subMenu.style.display = 'block';
        flag = true;
    }
}

//// чому тернарка не спрацювала?
//// link.onclick = () => flag ? (subMenu.style.display = 'none' && flag = false) : (subMenu.style.display = 'block' && flag = true); 

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
{title : 'comment1', body:'lorem ipsum dolo sit ameti'},
{title : 'comment2', body:'lorem ipstrttttttttttttttteti'},
{title : 'comment3', body:'lorem ipsum dolo sit tukfyukfyukameti'},
{title : 'comment4', body:'lorem ipsum dolo sit ameti tttttttttt'},
{title : 'comment5', body:'lorem ipsum dolo sit ameti'},
]

let template = `<div class="comment">`;

    comments.forEach((el, index) => {
    template += `<div class="comment__title"><strong>${el.title}</strong></div>
                 <button class="comment__btn" data-btn="${index}">hide</button>
                 <div class="comment__body" data-body="${index}">${el.body}</div>`
             }) 

   template += `</div>`;

document.getElementById('comments').innerHTML = template;


let commentBtn = document.querySelectorAll('.comment__btn');
let commentBody = document.querySelectorAll('.comment__body');

commentBtn.forEach(btn => {
    btn.onclick = () => {
        commentBody.forEach(body => {
            if (btn.dataset.btn == body.dataset.body && !body.hidden ) {
                body.hidden = true;
            } else {
                body.hidden = false;
            }
    
        })
    }
})

// let flag = false;

// commentBtn.forEach(btn => {
//     btn.onclick = () => {
//         commentBody.forEach(body => {
//             if(btn.dataset.btn == body.dataset.body && !flag) {
//                 body.style.display = 'block';
//                 btn.innerText  = 'close'
//                 flag = true;
//                 console.log('active - ' , btn.dataset.btn, body.dataset.body, flag, btn.innerText)

//             } else {
//                 body.style.display = 'none';
             
//                 flag = false;
//                 console.log('else - ' , btn.dataset.btn, body.dataset.body, flag, btn.innerText)
//              }

//             //  if (btn.dataset.btn == body.dataset.body && flag && btn.innerText  == 'close') {
//             //               btn.innerText  = 'open';
//             //              // body.style.display = 'none';
//             //               flag = false;
//             // }
          
//         })
//         console.log('*****************************************************************')
//         }
      
//     })



// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const btn2 = document.getElementById('btn');

btn2.onclick = () => {
    console.log(document.getElementById('input1').value);
    console.log(document.getElementById('input2').value);
    console.log(document.forms.forma2.input21.value);
    console.log(document.forms.forma2.input22.value);
}

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const tableBtn = document.getElementById('tableBtn');

function createTable (tr, td, element, tdText) {
   let el = document.createElement(element);
   let table = document.createElement('table');
   for (let i = 0; i < tr; i++) {
    let trTable = document.createElement('tr');
        for( let j = 0; j < td; j++) {
            let tdTable = document.createElement('td');
            trTable.appendChild(tdTable);
            tdTable.innerText =  tdText;
        }
     table.appendChild(trTable);
   }
   el.appendChild(table);
   console.log(el)
 }

 tableBtn.onclick = () => {
    createTable(document.getElementById('tr').value, document.getElementById('td').value, 'div', 'zfdg');
 }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let arr = ['бляха', 'Говнюк', 'сучка', 'жопа', 'курва'];
// let wordsBtn = document.getElementsByClassName('words');
// let input = document.querySelector('input[name="words"]');

// wordsBtn[0].onclick = () => {
//     arr.forEach(el =>  input.value.toLowerCase().indexOf(el) !== -1 && alert('Stop! нецензурна лексика'))
// }


//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

let content = document.getElementById('content');
let subHeader = document.querySelectorAll('h2');

let rules = document.querySelectorAll('.rules');
rules.forEach((item, index) => item.id = `h${index + 1}`);

let list = `<ul>`;
subHeader.forEach((header, index) => list += `<li><a href="#h${index + 1}">${header.innerText}</a></li>`);
list += `</ul>`

content.innerHTML = list;

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан