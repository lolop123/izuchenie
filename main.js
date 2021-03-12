//сохранение на всех вкладках localstorage
localStorage.setItem('names', JSON.stringify({
    name: 'Tom'
})); //только строки
localStorage.getItem('names');
//json
JSON.stringify(12); //"12"
JSON.parse("12"); //12
//#region получение значений элементов

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    heart = document.querySelectorAll('.heart');
const wrapper = document.getElementById("wrapper");
const ol = document.getElementById("ol");
const ah = document.getElementById("ah");
let wrap = document.querySelector('.wrapper2');

//#endregion
//#region изменение элементов
box.style.backgroundColor = 'black'; //чтобы искать вводим название типа бэкграунт в гугле и в канце статьи есть обьектная модель
//btn[0].style.borderRadius = '100';

for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = 'red';
}
heart.forEach(function (item, i) {
    item.style.backgroundColor = 'blue';
})
let div = document.createElement('div'),
    text = document.createTextNode('я тут был');

div.classList.add('black'); //добавляет к элементу класс


//document.body.insertBefore(div,btn[0]);//второе значение перед чем вставлять
//ol.remove();
// btn.replaceWith(box);
// document.body.appendChild(div);
let newlistitem = document.createElement('li');
newlistitem.textContent = 'banana';
ol.appendChild(newlistitem);
const item1 = ol.children[1];
ol.replaceChild(newlistitem, item1);
// wrapper.replaceChild(heart,btn)





//#endregion
//#region события и обработчики


btn[1].addEventListener('click', function (event) {
    let target = event.target;
    target.style.display = 'none';
    console.log(event.type + event.target);
});
btn[1].addEventListener('mouseenter', function (event) {

    btn[1].style.backgroundColor = 'gray';

});
btn[1].addEventListener('mouseleave', function (event) {

    btn[1].style.backgroundColor = 'red';

});
wrap.addEventListener('click', function () { //див вывше по структуре тоже выполняется после внутренностей
    btn[0].style.backgroundColor = 'gray';
});
document.getElementById("myAnchor").addEventListener("click", function (event) { //отмена перехода по ссылке
    event.preventDefault();
});


//#endregion
//#region Мобильные события

window.addEventListener('DOMContentLoaded', function () {
    /* let box = document.querySelector('.box');
    box.addEventListener('touchstart', function(event){         //клик 
    event.preventDefault();
    console.log('hui');
    console.log(e.touches[0].target);                           //куда нажимает первый палец
    console.log(e.changedTouches);
    console.log(e.targetTouches);




    
    }); */
    box.addEventListener('touchmove', function (event) {
        event.preventDefault();
        console.log('hui');


    });
    box.addEventListener('touchend', function (event) {
        event.preventDefault();
        console.log('hui');


    });
});




//#endregion
//#region регулярные выражения

//new RegExp('pattern','flags');


let ans1 = prompt('введите ваше имя');
let reg = /n/ig;
//console.log(ans1.search(reg));//возвращает номер позиции буквы
console.log(ans1.match(reg)); //возвразает массив всего, что задано рег выражением reg
//i вне зависимости от регистра Аа
//g искатьвсе совпадение
//m
//d цифры   D если не, то есть капс
//w буквы
//s пробелы
let ans = ans1.replace(/./g, "*"); // заменяет точка все элементы g не один раз на *
let ans2 = ans1.replace(/n/i, 'p');

//если будет хоть одно совпадение по выражению то выведет тру
console.log(ans1.match(/\d/g));

let str = "lol oh my god R/2D2";
console.log(str.match(/\w\d\w\d/g));
console.log(str.match(/\//)); //чтобы найти эту палку, как и все символы



//#endregion
//#region ajax
let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => { //method get
    let request = new XMLHttpRequest();

    request.open('GET', '/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'что то пошло не так';
        }
    });
});


//#endregion