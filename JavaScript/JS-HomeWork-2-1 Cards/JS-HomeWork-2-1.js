
// - Створити масив автівок з полями id , model, producer ,tankVolume, horsePower, image. 15 об'єктів.
//Вивести увесь масив в документ застилізувавши його по 2 елементи в ряд

let cars = [
    {id: 1,
     producer: 'Audi',
     tankVolume: 63,
     horsePower: 333,
     img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
    },

    {   id: 2,
        producer: 'Volkswagen Jetta',
        tankVolume: 50,
        horsePower: 230,
        img: 'https://i.infocar.ua/img/models/5464.jpg',
       },

    {   id: 3,
        producer: 'Honda Accord',
        tankVolume: 70,
        horsePower: 192,
        img: 'https://autoreview.ru/images/Article/1709/Article_170987_860_575.jpg',
       },

    {   id: 4,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

    {   id: 5,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

    {   id: 6,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

    {   id: 7,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

       {   id: 8,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },
       
    {   id: 9,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

       {   id: 10,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

    {   id: 11,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

       {   id: 12,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

       {   id: 13,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

       {   id: 14,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },

       {   id: 15,
        producer: 'Audi',
        tankVolume: 63,
        horsePower: 333,
        img: 'https://s.auto.drom.ru/i24195/c/photos/fullsize/audi/a6/audi_a6_456538.jpg',
       },
]

let container = document.querySelector('.container');
console.log(container);

for (let i = 0; i < cars.length; i++) {
   
    container.innerHTML += `<div class="item">
                    <div class="item__img" style="background: url(${cars[i].img});"> </div>
                    <div class="item__text">
                        <h2>${cars[i].producer}</h2>
                        <p>Обьем двигателя - ${cars[i].tankVolume}</p>
                        <p>Лошадиных сил - ${cars[i].horsePower}</p>
                    </div>
                </div>`
}

console.log(container);