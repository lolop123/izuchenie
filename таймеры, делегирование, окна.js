//#region timeout и interval и примитивная анимация
function sayhello() {
    console.log('lol');
}
let timerid = setTimeout(sayhello, 3000) //миллисекунды
clearTimeout(timerid);
let intervalid = setInterval(sayhello, 3000);
clearTimeout(intervalid);

let timerid2 = setTimeout(function log() //рекурсивная,для того, чтобы вызывалась после выполнения какой то функции
    {
        console.log('hello');
        setTimeout(log, 2000);
    });

let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

function myanimation() {
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myanimation);
//#endregion
//#region делегирование
let btnblock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');
btnblock.addEventListener('click', function (event) {
    if (event.target && event.target.tagName == 'BUTTON' && event.target.matches('button.first')) { //&& event.target.classList.contains('first')
        console.log('lol');
    }
})

//#endregion
//#region получение размера элемента и окна и работа с ним

//let btn = document.querySelector('.btn');
//let elem = document.querySelector('.box');
let wrap = document.querySelector('.wrapper');
let width = wrap.clientWidth;
let height = wrap.clientHeight;
let offset = wrap.offsetHeight; //с учетом обводки и скролла
let doc = document.documentElement.clientWidth;
console.log(doc);
document.documentElement.scrollTop = 0; //подняться в начало
scrollBy(0, 200); //опуститься на 200 пикселей
scrollTo(0, 200); //переместиться в 



console.log(wrap.getBoundingClientRect().left); //нахождение местоположения люого обьекта





//#endregion
//#region json

let options = {
    width: 1366,
    height: 1228,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
}
console.log(JSON.parse(JSON.stringify(options))); //переводим в джейсон и потом парсим в джс


//#endregion
//#region promise
let drink = 1;

function shoot(arrow) {
    console.log('вы сделали выстрел');
    let promise = new Promise(function (resolve, reject) {

        setTimeout(function () {
            Math.random() > 5 ? resolve({}) : reject('вы промахнулись');
        }, 3000);
    });
    return promise;
}
shoot({})
    .then(mark => console.log('вы победили'))
    .then(console.log('вам купили пива'))
    .catch(loose);

function buyBeer() {
    console.log('вам купили пива');
}

function giveMoney() {
    console.log('you have payed');
}

function win() {
    console.log('вы победили');
    (drink == 1) ? buyBeer(): giveMoney();
}

function loose() {
    console.log('вы проиграли');
}

//#endregion