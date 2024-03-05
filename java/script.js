"use strict";

// alert ('Я JavaScript!');

// /* Пример с двумя сообщениями.
// Это - многострочный комментарий */
// alert ('Hello World!');


// // Однострочный комментарий (1)
// alert(3 + 1 + 2); // Однострочный комментарий (2)

// LET

// let name = "Max";
// let age = 20;
// let message = "Hello"; // Оно уже не будет выводиться

//     message = "I'm Max";

// alert (message);

// let text = 'Some text';
// let text2 = text;

// alert (text);
// alert (text2);


// CONST

// const myBirthday = '28.12.2002';

// alert (myBirthday);

// TASK 1

// let name = 'John';
// let admin = name;
// alert (admin);

// const namePlanet = 'Earth';
// alert (namePlanet);

// let currentUserName;




// ТИПЫ ДАННЫХ

// NUMBER

// let a = 2;
// let b = 2.1;
// alert (`result: ${a + b}`);

// BIGINT

// const bigInt = 1231238912739748723984798239482798478923n;
// alert (bigInt);

// STRING

// const name = "Abdul";
// alert (`Hello, ${name}`);

// BOOLEAN

// let isGreater = 2 < 1;
// alert(isGreater);

// NULL

// let age = null;

// UNDEFINED

// let age;
// alert(age);

// TYPEOF

// typeof 1;



// PROMPT

// let userName = prompt("What is your name?", "");
// alert (`My name is ${userName}`);

// CONFIRM

// let isChef = confirm("Are you a chef?");
// alert(isChef);



// ПРЕОБРАЗОВАНИЕ ТИПОВ

// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123

// alert(typeof num); // number




// Базовые операторы, математика

// let x = 1;

// x = -x;
// alert( x ); // -1, применили унарный минус

// % Взятие остатка

// alert( 5 % 2 ); // 1, остаток от деления 5 на 2
// alert( 8 % 3 ); // 2, остаток от деления 8 на 3
// alert( 8 % 4 ); // 0, остаток от деления 8 на 4

// ** Возведение в степень 

// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// +

// alert(2 + 2 + '1' ); // будет "41", а не "221"

// Унарный + 

// Не влияет на числа
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Преобразует не числа в числа
// alert( +true ); // 1
// alert( +"" );   // 0

// let apples = "2";
// let oranges = "3";

// // оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges ); // 5

// // более длинный вариант
// // alert( Number(apples) + Number(oranges) ); // 5

// // Присваивание по цепочке 

// let a, b, c;

// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4

// Сокращённая арифметика с присваиванием

// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert( n ); // 14

// Инкремент/декремент

// let counter = 1;
// counter++;
// alert(counter);

// let counter1 = 5;
// counter1--;
// alert(counter1);

// let counter3 = 1;
// let a = ++counter3; // (*) префиксная форма

// alert(a); // 2

// let counter4 = 1;
// let b = counter4++; // (*) меняем ++counter на counter++ постпрефиксная форма

// alert(b); // 1


// let counter5 = 1;
// alert( 2 * ++counter5 ); // 4

// let counter6 = 1;
// alert( 2 * counter6++ ); // 2, потому что counter++ возвращает "старое" значение




// , 

// let a = (1 + 2, 3 + 4);

// alert(a); // 7 (результат вычисления 3 + 4) присваивается только последнее значение


// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12




// Операторы сравнения

// alert( 2 > 1 );  // true (верно)
// alert( 2 == 1 ); // false (неверно)
// alert( 2 != 1 ); // true (верно) неравно





// Условное ветвление: if, '?'

// let year = prompt("Какой сейчас год?", "");

// if (year == 2024) {
//   alert("Верно");
//   alert("Отлично");
// } else {
//   alert("Вы ошиблись");
// }

// let year = prompt("Какой сейчас год?", "");

// if (year > 2024) {
//   alert ("Меньше");
// } else if (year < 2024) {
//   alert("Больше");
// } else {
//   alert("Верно");
// }

// let accessAllowed;
// let age = prompt("How old are you?", "");

// if (age >= 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false
// }

// alert(accessAllowed);

// let accessAllowed = (age > 18) ? true : false;

// alert(accessAllowed);

// let age = prompt("How old are you?", 18);

// let message = (age < 3) ? "Hello baby" :
//   (age < 18) ? "Hello" :
//   (age < 100) ? "Hello adult" :
//   "What a beautiful age";

// alert(message);

// let nameWho = prompt("Who created Earth?", "");

// (nameWho == "God") ? 
//   alert("True") : alert("False");

// let nameJavaScript = prompt("Какое «официальное» название JavaScript?", "");

// if (nameJavaScript == "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// let number = prompt("Какое число?", 0);

// if (number > 0 ) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }


// let result;
// let a = 1;
// let b = 1;

// result = (a + b < 4) ? "Мало" : "Много";

// alert(result)

// let login = prompt("Какая у вас должность?", "");

// let message = (login == "Сотрудник") ? "Привет" :
//     (login == "Директор") ? "Здравствуйте" :
//     (login == "") ? "Нет логина" :
//     "";

// alert(message)



// Логические операторы

// || (ИЛИ)

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert("Офис закрыт.");
// }



// let johnHasCar = false;

// johnHasCar ||= "У Джона нет машины!";

// alert( johnHasCar ); // "У Джона нет машины!"


// && (И)

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert("Время 12:30");
// }


// let age = prompt("Диапозон", "Введи число");
// let yes = true;
// let no = false;

// if (age >= 14 && age <= 90){
//   alert(yes)
// } else (
//   alert (no)
// )

// let age = prompt("Диапозон", "Введи число");
// let yes = true;
// let no = false;

// if (age < 14 || age > 90){
//   alert(yes)
//   } else (
//   alert (no)
// )


// let age = prompt("Диапозон", "Введи число");
// let yes = true;
// let no = false;

// if (!(age >= 14 && age <= 90)){
//   alert(yes)
// } else {
//   alert(no)
// }

let userName = prompt("Введите логин", "");

if (userName === "Админ") {

  let pass = prompt("Введите пароль", "");

  if (pass === "Я главный") {
    alert("Добро пожаловать");
  } else if (pass === "" || pass === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
  
} else if (userName === "" || userName === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}



