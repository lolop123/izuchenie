//#region ифы и обьвления
let message; //переменная
message = "Hello";
const myBirthday = "18.04.1982"; //нельзя изменить
typeof message; //string
//let age = prompt('Сколько тебе лет?');//выводит вопрос как алерт
let isBoss = confirm("Ты здесь главный?"); //булл да/нет
//Number(value) String(value) меняют тип
//if (year == 2015) alert( 'Вы правы!' );
message =
  age < 3
    ? "Здравствуй, малыш!"
    : age < 18
    ? "Привет!"
    : age < 100
    ? "Здравствуйте!"
    : "Какой необычный возраст!";
if (age < 3) {
  message = "Здравствуй, малыш!";
} else if (age < 18) {
  message = "Привет!";
} else if (age < 100) {
  message = "Здравствуйте!";
} else {
  message = "Какой необычный возраст!";
}
company == "Netscape" ? alert("Верно!") : alert("Неправильно.");
//alert( null || 0 || 1 ); // 1 (первое истинное значение)
//result = value1 && value2 && value3; // вернется первый трушный
//alert( !0 ); // true
let user;

//alert(user ?? "Аноним"); для проверки на нулл
//#endregion
//#region Циклы
let i = 0;
while (i < 3) {
  // выводит 0, затем 1, затем 2
  i++;
}
i = 0;
do {
  i++;
} while (i < 3);
for (let i = 0; i < 3; i++) {
  // выведет 0, затем 1, затем 2
  console.write(i);
}
if (!value) break;
if (i % 2 == 0) continue;

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Значение на координатах (${i},${j})`, "");

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}
alert("Готово!");

let a = 2 + 2;

switch (a) {
  case 4:
    alert("В точку!");
    break;

  case 3: //алерт будет один для обоих кейсов
  case 5:
    alert("Неправильно!");
    alert("Может вам посетить урок математики?");
    break;
  default:
    alert("Нет таких значений");
} //Если break нет, то выполнение пойдёт ниже по следующим case
//#endregion
//#region функции
function showMessage(from, text = "текст не добавлен") {
  alert(from + ": " + text);
}

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);

let sum = (a, b) => a + b; //стрелочная функция
let double = (n) => n * 2;
let sayHi = () => alert("Hello!");

let welcome = age < 18 ? () => alert("Привет") : () => alert("Здравствуйте!");
//#endregion
//#region Обьекты
console.log(+obj);     // 10        -- желаемый тип (hint) - "number"
console.log(`${obj}`); // "hello"   -- желаемый тип (hint) - "string"
console.log(obj + ''); // "true"    -- желаемый тип (hint) - "default"
let obj = {
  [Symbol.toPrimitive](hint) {
    if (hint == 'number') {
      return 10;
    }
    if (hint == 'string') {
      return 'hello';
    }
    return true;
  },
  width: 1024,
  height : 1024,
  name : "ilia",
  "+49": "Германия",
  sayHi() {
    // this - это "текущий объект"
    alert(this.name);
  };
  go: function() { alert(this); }
  

}
alert( obj?.address ); // undefined

user?.sayHi(x++); // нет user, поэтому до x++ вычисление не дойдет
user1.admin?.(); // Я администратор
user2.admin?.();

let clone = {}; // новый пустой объект

Object.assign(user, clone); // скопируем все свойства user в него

let clone = Object.assign({}, obj);


obj.new1 = '115l';
obj.colors =
{
  border: 'black',
  bg: 'red'
}
delete obj.name;

for(let key in obj){
  obj[key] += '1';
  console.log(key);
}
console.log(obj)





//#endregion
//#region массивы и foreach



let arr = [1,2,3]

arr.pop();//удалить последний
arr.push('5');//добавить в конец
arr.shift();//удалить последнее
arr.unshift('0');//добавить в начало

for (let i = 0; i < arr,length; i++) {
  //
  console.write(arr[i]);
}
arr.forEach(function(item,index,array)
{
  console.log(i + item + "массив: " + array)//эррей выведет весь массив
}
)

let ans = prompt("",""); 

let arr = ['lol','hui'];
arr = ans.split(',');//берет элементы из первого массива и разделяет по запятой
let i = arr.join(', ');//склеивает в одну строку весь массив через запятую
let i = arr.sort(CompareNow);//сортирует но только буквы по алфавиту

function CompareNow(a,b)
{
return a - b;
}
  //#endregion
//#region наследование
let soldier = {
  damage: 1000,
  health: 500
}
let John = {
  name : john
}
john._proto_ = soldier;
console.log(John.damage)
//#endregion
//#region классы
class User {
  constructor(name) {
    this.name = name;
  }
  
  name = "Аноним";

#sayHi() {              //приватная функция
    alert(this.name);
  }
  get sayHi() {
    return this.#sayHi;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }
  static staticMethod() {       //для внутриклассовых функций
    alert(this === User);
  }
}
class bot extends User {
  constructor(name, earLength) {
    super(name);
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  hide() {
    alert(`${this.name} прячется!`);
  }
  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let user = new User("Иван");
user.sayHi();

//#endregion
//#region даты
var start = new Date; // засекли время

// что-то сделать
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date; // конец измерения
end.setFullYear(2002);
console.log(end - start);

/* setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) */

alert(+new Date) // +date то же самое, что: +date.valueOf()
console.log(end.toString());

var ms = Date.parse('2012-01-26T13:51:50.417-03:00');         //- d концце это указание GMT
                                                              //Существуют также UTC-варианты этих методов, возвращающие день, месяц, год и т.п. для зоны GMT+0 (UTC): getUTCFullYear(),
                                                              // getUTCMonth(), getUTCDay(). То есть, сразу после "get" вставляется "UTC".
alert( ms ); // 1327611110417 (число миллисекунд)
//#endregion
//#region интерполяция `${}` и spread
let name2 = 'ivan', age = 30, last = 'hui';
//document.write(`пользователю ${name2} ${age} лет он ${last}`);
let game = [name2, 'hex'];
let video = [...game, 'lpl'];   //выводит без дополнительных кавычек
console.log(video);
//#endregion



