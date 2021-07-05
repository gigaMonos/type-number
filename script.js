/*
//число
let someNum = 458;
console.log(someNum);
//десятичные числа
let someNums = 4.58;
console.log(someNums);
// способ записи чисел 
//с большим количеством нулей
let someBigNum = 1e6; //1 * 1 000 000
console.log(someBigNum);
//вариант записи супер маленьких чисел
let someLittleNum = 1e-6;
console.log(someLittleNum);
console.log(0xFF); //шестнадцатеричная сиситема счисления 
console.log(0b11111111); //двоичная системв счисления 
console.log(0o377);//восьмеричная система счисления
// метод toString
let num = 1697849;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
//Math.floor округление в меньшую сторону
let numOne = Math.floor (5.8);
console.log(numOne);
let numTwo = Math.floor(2.2);
console.log(numTwo);
let numThee = Math.floor(-2.2);
console.log(numThee);
//Math.ceil округление в большую сторону
let ceilOne = Math.ceil(5.8)
console.log(ceilOne);
let ceilTwo = Math.ceil(2.2)
console.log(ceilTwo);
let ceilThree = Math.ceil(-2.2);
console.log(ceilThree);
// округление до ближайшего целого 
let roundOne = Math.round(5.8);
console.log(roundOne);
let roundTwo = Math.round(2.2);
console.log(roundTwo);
let roundThree = Math.round(-2.2);
console.log(roundThree);

let numOne = Math.round(5.845 * 10) / 10;
console.log(numOne); //округлит до 5.8
let numTwo = Math.round(5.845 * 100) / 100; //округлит до 5.85 
console.log(numTwo);

let numFixed = 5.4585; //метод удаляет лишние знаки
console.log(+numFixed.toFixed(1)); //1 это количество символов после запятой
//унарный плюс преобразовывает строку в номер
//еще один вариант преобразования данных
console.log(Number(numFixed.toFixed(1)));

//проблемы вычслений
let numOne = Math.round(1.005*100)/100;//ожидаемм 1.01 полчаем 1 
console.log(numOne);
let numTwo = 12.35;
console.log(numTwo.toFixed(1));//ожидаем 12.4 но получем 12.3

let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
//проблемы с округлением появляются 
//из-за маленьких чисел в конце
console.log(0.1 + 0.2);
//решение проблемы с помощью Number.EPSILON
let sourceNum = 1.005 + Number.EPSILON;
let numRound = Math.round(sourceNum * 100) / 100;
console.log(numRound);
//Infinity i Nan
//isNan 
console.log(Number(25 + "Hello"));
console.log(isNaN(25 + "Hello"));//true, правда поточу, что тип данных Nan
if (25 + "Hello" !== NaN){
    console.log("I m not Nan");
}// nan не равен nan по природе по этому код сработал
//isFinite 
console.log(isFinite("25"));
console.log(isFinite("Hello"));
console.log(isFinite(10/0));

//как почучить 150? //parseInt and parseFloat
value = "150.58px";
console.log(value);
console.log(typeof value);
value = parseInt(value);
console.log(value);
console.log(typeof value);
value = parseFloat(value);
console.log(value);
console.log(typeof value);
console.log(parseInt('0xff', 16)); //parseInt доп возможности
console.log(Math.random()); //возвращает рандомные числа
console.log(Math.max(5, 85, -49)) //возырвщвет найбольшее число 
//из перечисленных аргементов
console.log(Math.min(5, 85, -49)); //возвращает наименьшее число 
//из перечисленных аргументов
console.log(Math.abs(-58)); //возвращает абсолютное значение (модуль) числа
//Math.pow(n, power)
//возвращает число n возведенную в степень power
console.log(Math.pow(5,8));
*/
let value = 56 + "hello";
console.log(Number(value));
if(value){
    console.log('rezult Nan');
}
console.log(isNaN(value));