// var firstName = 'Wissanu';

// let lastName;
// const age = 27;
// age = 37;

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// var firstName;
// console.log(firstName);
// firstName = 'Wissanu';

// console.log(firstName);
// var firstName = 'Wissanu';
// // let lastName = 'KonjunD';
// // console.log(firstName);

// {
//   var firstName = 'Wissanu';
//   let lastName = 'KonjunD';
// }
// console.log(firstName)
// console.log(lastName)

// const my_home = '119';
// const myhome = '120';
// const MYHOME = '121';

// const myHome = '122';

// let human, name;
// name = 'Earth';
// human = name;
// alert(human);

// const age = 27;
// const Age = 37;

// console.log(age);
// console.log(Age);

// const firstName = 'Wissanu'
// const lastName = "KonjunD";
// const nickname = `Tle`;

// const fullname = `${firstName} ${lastName}`;

// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);
// console.log('${firstName} ${lastName}');

// const a = true;
// const b = false;

// console.log(a && b);
// console.log(a || b);
// console.log(!a);

// let user = null;

// console.log(typeof null);
// console.log(typeof(fullname));
// let price = 10;
// let quantity = 15;
// const total = price * quantity;

// console.log(total)
// console.log(`${price * quantity} Baht`)
// console.log(price * quantity)

// const name = 'Earth';
// const age = 27;
// const address = '188 Mint Tower';

// console.log(`My name is ${name}. I'm ${age} years old. I live at ${address}.`)

// const a = String(undefined); // 'undefined'
// const b = String(null); // 'null'
// const c = String(true); // 'true'

// const d = '' + age;
// const e = `${age}`;
// const f = age.toString();
// const g = JSON.stringify(age)

// console.log(a, b, c, typeof a, typeof b, typeof c);

// const value = '250';
// console.log(Number(value), typeof Number(value));
// const  str = '100';
// const a = Number(str);
// const b = +str;
// const c = str * 1;

// console.log(Number(undefined))
// console.log(Number(null));
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number('  2 0 0   '))

// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean('   '));
// console.log(Boolean('0'));

// console.log('1'+4+7);
// console.log(1+4+'7');

// let age = prompt('Enter your age');
// alert(typeof age);

// const numPen = 1000;
// let increasePen = +prompt('Enter your new pen');

// const newNumPen = numPen + increasePen*1;
// const newNumPen = numPen + +increasePen;
// const newNumPen = numPen + Number(increasePen);

// console.log(21 % 5);
// console.log(11 ** '2');

// console.log(0.2 + 0.1)
// console.log(0.2 + 0.5)

// let i = 0;
// i = i+1;

// i++;
// i += 5;
// i--;

// let j = 10;
// j += 6; // j = j + 6; 16
// j -= 2; // j = j - 2; 14
// j *= 3; // j = j * 3; 42
// console.log(j);

// let i = 0;
// const x = i++; // x = 0, i = 1
// const y = ++i; // y = 2, i = 2

// let a = 1; // a = 1
// let b = 2; // b = 2
// let c = a++; // c = 1 a = 2
// let d = ++c; // d = 2 c = 2
// let e = ++d // d = 3; 3 
// + d++ // d = 4; 3 + 3
// + d; // d = 4; 3 + 3 + 4

// console.log('A' < 'Z'); // true
// console.log('A' < 'a'); // true
// console.log('coco' < 'code'); // true
// console.log('10' < '2'); // true
// console.log('Be' < 'Bee'); // true

// console.log('3' < 5); // true
// console.log('01' == 1); // true

// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

// const x = 10;

// if (x > 5) {
//   console.log('Is Greater');
// }

// const age = prompt('Enter your age');

// if (age > 18) { // ('15' > 18) => (15 > 18) ?
//   console.log('More than 18');
// } else {
//   console.log('Less than 18');
// }

// สร้าง prompt รับ ปีเกิด ถ้า อายุ มากกว่า 20 alert('More than 20') น้อยกว่าหรือเท่ากับ 20
// alert('Less than or equal 20)

// const birthYear = prompt('Enter your birth year'); // '1991'

// const age = 2021 - birthYear; // 2021 - '1991' => 30
// if (age > 20) {
//   alert(`Age: ${age}, More than 20`)
// } else if (age === 20) {
//   alert(`Age: ${age}, you're 20`) 
// } else {
//   alert(`Age: ${age}, Less than 20`)
// }
// let message;
// if (age < 18) {
//   message = 'Unauthorized';
// } else {
//   message = 'Go go go';
// }

// let message = age < 18 ? 'Unauthorized' : 'Go go go';

// let message = age > 20 ? 'More than 20' : age === 20 ? 'you\'re 20' : 'Less than 20'

// const score = prompt('Enter your score');

// if (score >= 80) {
//   alert('A');  
// } else if (score >= 70) {
//   alert('B');
// } else if (score >= 60) {
//   alert('C');
// } else if (score >= 50) {
//   alert('D');
// } else {
//   alert('F');
// }

// if (!score) alert('You don\'t enter score');
// else if (score > 100 || score < 0) alert('Score must less than or equal 100 and greater than 0');
// else if (score >= 80) alert('A');
// else if (score >= 70) alert('B');
// else if (score >= 60) alert('C');
// else if (score >= 50) alert('D');
// else alert('F');

// const x = 1;
// const y = 'undefined';
// const z = 55;
// const isXGreaterThanY = x > y;

// const w = x || y || z; // w = z = 55
// const a = x && y && z; // a = 55

// (x===1) && alert('true');


// function max(a, b) {
  
//   // return a>b ? a : b;
// }
  
// const isMax = max(5, 7);
// console.log(isMax)
  
// const username = prompt('Enter your username');
// const isFilled = !!username; Boolean(username)

// alert( alert(1) && alert(2) );

// 1 alert(1) => alert(undefined && alert(2))
// 2 alert(undefined)

// let username = prompt('Enter username');

// while (username === '') {
//   alert('กรุณากรอก username')
//   username = prompt('Enter username');
// }

// if (username) {
//   if (username === 'Admin') {    
//     if (prompt('Enter password') === 'codecamp#8') {
//       alert('ยินดีต้อนรับ')
//     } else {
//       alert('Wrong password')
//     }
//   } else {
//     alert('ผมไม่รู้จักคุณ')
//   }
// } else {
//   alert('ยกเลิก')
// }

// let i = 11;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 11;

// do {
//   console.log(j);
//   j++;
// } while (j <= 10)

// for (begin;condition;step) {
//   body
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// iteration 1 ; i = 1 check i <= 10 => true execute code in body
// log 1 => i = 2

// iteration 2 ; i = 2 check i <= 10 ? => true execute code in body
// log 2 ; increase i by 1 => i = 3

// .
// .
// .

// iteration 10; i = 10 check i <= 10 ? => true execute code in body
// log 10 ; increase i by 1 => i = 11

// iteration 11; i = 11 check i <= 10 ? => fales not execute code in body
// end for loop
// let i = 1;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i)
//   console.log()
// }

// alert(i)

// let i = 0;
// while (i++ < 5) alert( i );

// #1 check i++<5 => check 0<5 => i = 1; alert(i) => alert 1
// #2 check i++<5 => check 1<5 => i = 2; alert(i) => alert 2
// #3 check i++<5 => check 2<5 => i = 3; alert(i) => alert 3
// #4 check i++<5 => check 3<5 => i = 4; alert(i) => alert 4
// #5 check i++<5 => check 4<5 => i = 5; alert(i) => alert 5
// #6 check i++<5 => check 5<5 => i = 6; end loop

// let i = 0;
// while (++i < 5) alert( i );
// #1 check ++i<5 => check 1<5 => i = 1; alert(i) => alert 1
// #2 check ++i<5 => check 2<5 => i = 2; alert(i) => alert 2
// #3 check ++i<5 => check 3<5 => i = 3; alert(i) => alert 3
// #4 check ++i<5 => check 4<5 => i = 4; alert(i) => alert 4
// #5 check ++i<5 => check 5<5 => i = 5; end loop

// let answer;

// while (1) {
//   const answer = prompt('Enter correct number'); // 20
//   if (guestNumber > 100 || guestNumber < 0) {
//     alert('Invalid number');
//     continue;
//   }
//   break;
// }

// while (1) {
//   const guestNumber = prompt('Enter your number'); // 101
  
//   if (guestNumber > 100 || guestNumber < 0) {
//     alert('Invalid number');
//     continue;
//   }

//   if (guestNumber === answer) {
//     alert('Correct')
//     break;
//   }
  
//   guestNumber > answer ? alert('มากไป') : alert('น้อยไป')

  // if (guestNumber > answer) {
  //   alert('มากไป');
  //   continue;
  // }
  
  // if (guestNumber < answer) {
  //   alert('น้อยไป');   
  // }  
// }
// const strToConvert = '20';
// Number(strToConvert)
// +strToConvert
// strToConvert*1

// const answer = +prompt('Enter correct number');
// let guestNumber = +prompt('Enter your number');

// while (answer !== guestNumber) {
//   guestNumber = +prompt('Enter your number');
//   if (guestNumber > answer) {
//     alert('ค่ามันมากไปนะ')
//   } else {
//     alert('ค่ามันน้อยไปนะ')
//   }
// }

// alert('Correct')

// let a = 2;

// switch(a) {
//   case 1:
//     alert(1)
//     break;
//   case 2:
//     alert(2)
//     break;
//   case 3:
//     alert(3)
//     break;
//   case 4:
//     alert(4)
//     break;
//   default:
//     alert('Other')
// }

// if (a === 1) {
//   alert(1)
// } else if (a ===2) {
//   alert(2)
// } else {
//   alert('Other')
// }

// const word = prompt('Enter anything'); // '1'

// switch(word) {
//   case 'apple':    
//   case 'orange':
//     alert('fruit')
//     break;
//   case 'dog':    
//   case 'cat':
//     alert('animal')
//     break;
//   default:
//     alert('Not categorized')
// }

// if (word === 'apple') {
//   alert ('fruit');
// } else if (word==='orange') {
//   alert('fruit')
// } else if (word==='cat') {
//   alert('animal')
// }else if (word==='dog') {
//   alert('animal')
// } else {
//   alert('Not categorized')
// }

// function calcCircleArea

// const radius1 = 10;
// const radius2 = 5;
// const radius3 = 20;

// const area1 = 3.141728 * radius1 ** 2;
// const area2 = 3.141728 * radius2 ** 2;
// const area3 = 3.141728 * radius3 ** 2;

// function calculateCircleArea(radius) { // radius = 10
//   if (Number(radius)) {
//     if (Number(radius) > 0) {
//       return 3.141728 * radius ** 2
//     } else {
//       return 'Raduis must greater than zero';
//     }
//   }

//   return 'Radius must be numeric';
//   // function body
// }

// function showTextInconsole(name) { //name = 'Beer'
//   console.log(`Hello ${name}`) // (2)
  // return 'Hello World From Return' // (3)
// }

// const result = showTextInconsole('Sun'); // (1) (3) return undefined => result 
// console.log(result) // (4)

// let value = 20;

// function testValueScope(sendValue) {
//   const newSend = sendValue; 
//   newSend = 30;
//   console.log('481' + newSend);
// }

// console.log('484'+value);
// testValueScope()
// console.log('486'+value);

// function testValue2() {
//   value = 26;
// }

// value = 15

// console.log('line 484 : ' + value); // value #477
// testValueScope(value) // value #477 => sendValue = 20
// console.log('line 486 : ' + value); // value #477

// function min(a, b) {
//   let result;
//   if (a > b) {
//     result = b;
//   } else {
//     result = a;
//   }
//   return result;
// }

// min(); // a = undefined, b=undefined return undefined
// min(1); // a=1, b=undefined
// min(1,5); // a = 1, b = 5

// const minVal = min(1,5);

// เขียนฟังก์ชันคำนวณ พื้นที่สี่เหลี่ยม ด้านกว้าง (w) ด้านยาว (L)
// W = 2, L = 6

// function alertName(name = 'Guest') {
//   alert(`Hello ${name}`);
// }

// function alertName(name) {
//   let showAlertMessage = name || 'Guest';  
//   alert(`Hello ${showAlertMessage}`)
// }

// alertName('Tle')
// alertName();

// function draw(n) {
  // let star = '';
  // for (let i = 1; i <= n; i++) {
  //   star = star + '*';
  // }
  // #1 i=1; 1<=4; star=''+'*' => '*'; i++ => 2
  // #2 i=2; 2<=4; star='*'+'*' => '**'; i++ => 3
  // #3 i=3; 3<=4; star='**'+'*' => '***'; i++ => 4
  // #4 i=4; 4<=4; star='***'+'*' => '****'; i++ => 5  
  
  // for(let i=1;i<=n;i++) {
  //   for(let j=1;j<=n;j++) {
  //     star = star + j;
  //   }
  //   star = star + '\n';
  // }

  // #1 j=1;i=1; star = '' + '*' => '*'
  // #2 j=2;i=1; star = '*' + '*' => '**'
  // #3 j=3;i=1; star = '**' + '*' => '***'
  // End Inner Loop star = '***' + '\n' => '***\n'
  // #4 j=1;i=2; star = '***\n' + '*' => '***\n*'
  // #5 j=2;i=2; star = '***\n*' + '*' => '***\n**'
  // #6 j=3;i=2; star = '***\n**' + '*' => '***\n***'
  // End Inner Loop star = '***\n***' + '\n' => '***\n***\n'
  // #7 j=1;i=3; star = '***\n***\n' + '*' => '***\n***\n*'
  // #8 j=2;i=3; star = '***\n***\n*' + '*' => '***\n***\n**'
  // #9 j=3;i=3; star = '***\n***\n**' + '*' => '***\n***\n***'
  // End Inner Loop star = '***\n***\n***' + '\n' => '***\n***\n***\n'

  // console.log(star) 
// }

// function draw18(n) {
//   let star = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       star += i > j ? '-' : '*' 
//     }
//     star = star + '\n';
//   }
//   console.log(star)
// }

// draw18(4)

// showMessage('Jit');
// showMessage();
// showMessage('Tle', 'Welcome to our website');

// let defaultWelcomeText = 'Hello World';

// function showMessage(name = 'Anonymous', text) {
//   // function body
//   let defaultWelcomeText = 'Hello everybody';
//   console.log('Hello ' + name);
//   console.log(text ? text : defaultWelcomeText);

//   // if (text) {
//   //   console.log(text);
//   // } else {
//   //   console.log(defaultWelcomText);
//   // }
// }

// showMessage('Jit');
// showMessage();
// showMessage('Tle', 'Welcome to our website');
// showMessage;

// const showMessage = function(name = 'Anonymous', text) {
//   console.log('Hello ' + name);
//   console.log(text);
//   return 'Success Log';
// };

// showMessage();
// showMessage('Jit');
// showMessage('Tle', 'Welcome to our website');

// console.log(showMessage);

// const showWelcomeText = showMessage;

// showWelcomeText('Tle', 'Welcome to our website');

// const myAlert = alert;
// console.log(myAlert)
// myAlert('Hello Student');

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// function ok(isOk, alertOk, alertCancel) {
//   // console.log(alertOk)
//   // console.log(alertCancel)
//   if (isOk) {
//     alertOk();
//   } else {
//     alertCancel();
//   }
// }

// ok(true, showOk, showCancel);

// function showOk1(message) {
//   alert( message );
// }

// function showCancel1(message) {
//   alert( message );
// }

// function ask(question, alertOk, alertCancel) {
//   const isOk = confirm(question);
//   // if (isOk) {
//   //   alertOk('Yes')
//   // } else {
//   //   alertCancel('No')
//   // }

//   if (isOk) {
//     alertOk('Yes')
//   } else {
//     alertOk('No')
//   }
// }

// // ask('Are u crazy', showOk1, showCancel1);
// ask('Are u crazy', showOk1);

// function returnFunc() {
//   const result = function() {
//     console.log('This is return function')
//   };  
//   return result;
// };

/*
  resultFromreturnFunc

  function() {
    console.log('This is return function')
  };
*/
// const resultFromReturnFunc = returnFunc();
// console.log(resultFromReturnFunc)
// resultFromReturnFunc()

// returnFunc()()

// (function() {
//   console.log('This is return function')
// })()
 
// fs.readFile('text.txt', function() {
//   console.log('success')
// })

// console.log('Do');
// console.log('After');

// function showMeessage() {

// }

// const showMessage = function() {
  
// };

// const showMessage = (name, text) => {
//   console.log('Hello' + name);
//   console.log(text);
//   return 'Show success';
// };

// const result = showMessage('Tle', 'Hello Code Camp');
// console.log(result);

// const showMessage = name => {
//   console.log('Hello' + name);  
//   return 'Show success';
// };

// const showMessage = name => {
//   return 'Show success ' + name;
// };

// const showMessage = (name, text) => 'Show success ' + name; // return 'Show success ' + name
// const showMessage = name => { return 'Show success ' + name };

// function sum(a, b) {
//   return a + b;
// }

// const sum = function(a, b) {
//   return a + b;
// }

// const sum = (a, b) => a + b;
// const sum = (a, b) => { return a + b };

// console.log(sum(2, 3));

// // user data email. firstName, lastName, birthDate, point, address, saleHistory
// const userEmail = 'tle@gmail.com';
// const userFirstName = 'Wissanu';

// const user = {
//   email: 'tle@gmail.com',
//   firstName: 'Wissanu'
// }

// const getUser = () => {
//   return {
//     email: 'tle@gmail.com',
//     firstName: 'Wissanu'
//   } 
// };

// const getUser = () => (
//   {
//     email: 'tle@gmail.com',
//     firstName: 'Wissanu'
//   } 
// );

// function checkRole(role) {
//   return function() {
//     if (role === 'Account') {

//     } else if (role === 'Store') {
  
//     }
//   };
// }

// const checkRole = role => { // role === 'Account' ? ['getAllSael', 'getAllAccount'] : ['getAllStock', 'getStockLost']
//   return () => {
//     if (role === 'Account') {
//       return ['getAllSael', 'getAllAccount']
//     } else if (role === 'Store') {
//       return ['getAllStock', 'getStockLost']
//     } else if (role === 'HR') {
//       return ['salary']
//     }
//   }
// };

// () => { /* body */ }

// const permission = check(role);

// user.email

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// ask('Do you agree?', () => alert('You agreed.'), () => alert('You canceled the execution.'));

// const sum=(a,b)=>a+b;
// const sum = (a, b) => a + b;

// for (let i = 0; i <= 5; i++) {
//   console.log();

//   function ask() {
//     console.log('kiskssk');
//   }

//   function ask() {
//     console.log('kiskssk');
//   }

//   function ask() {
//     console.log('kiskssk');
//   }

//   function ask() {
//     console.log('kiskssk');
//   }
// }

// Object declare
// #2
// const person = new Object();

// #1
// const person = {
//   'nickName': 'Jit',
//   "age": 14,
//   isAdult: true,
//   address: {
//     road: 'Banthatthong',
//     khet: 'Pathumwan',
//     changwat: 'Bangkok',
//     postalCode: '10330'
//   },
//   for: 'U',
//   function: 'func',
//   'has car': true,
//   hasCar: true,
// };

// console.log(person.color)

// const nickName = person.nickName;
// const age = person.age;
// const changwat = person.address.changwat

// const fort = person['for'];
// const hasCar = person['has car'];
// let road = person['address']['road'];
// road = person['address'].road;
// road = person.address['road'];

// const inputKey = prompt('enter key to find value'); // 'function', 'age'
// // let kValue = person.k; // Wrong
// kValue = person[inputKey]; // person['function'], person['age']
// // person['age']
// console.log(kValue)

// const type = 'Member';
// console.log(type)
// type = 'VIP'

// person.color = 'brown';
// console.log(person.color)
// person.color = 'red';
// console.log(person.color);
// delete person.color;
// console.log(person.color);

// person['color'] = 'green';
// delete person['color'];

// const keyToAdd = 'sex';

// const human = {
//   name: 'Tle',
//   age: 20, 
//   address: '190/0 Bangkok', 
//   isSingle: false, 
//   iq: 9.9,
//   [keyToAdd]: 'male'
// };
// const resultObj = {};

// // resultObj.key = 1;
// // resultObj = {
// //   key: 1
// // }

// while(1) {
//   const key = prompt('Enter key');
//   if (key === 'stop') break;
//   const value = prompt('Enter value');
//   if (value === 'stop') break;
//   resultObj[key] = value;
// }

// console.log(resultObj);

// const fruitObj = {};

// while(1) {
//   const name = prompt('Enter fruit');
//   if (name === 'stop') break;
//   const amount = prompt('Enter fruit quantity');
//   if (amount === 'stop') break;
//   fruitObj[amount > 1 ? `${name}s` : name] = amount;
// }

// console.log(fruitObj);

// const firstName = prompt('Enter firstname');
// const lastName = prompt('Enter lastname');
// const age = +prompt('Enter age');

// const user = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age
// };

// const user = {
//   firstName, // firstName: firstName
//   lastName,
//   age
// };

// console.log(user);

// const index = {
//   0: 'Zero',
//   1: 'One'
// }

// console.log(index[0])

// const user = {
//   firstName: 'Wissanu',
//   age: 27
// };

// const isFirstNameExist = 'firstName' in user;
// const isLastNameExist = 'lastName' in user;
// console.log(isFirstNameExist);
// console.log(isLastNameExist);

// const person = {
//   'nickName': 'Jit',
//   "age": 14,
//   isAdult: true,
//   address: {
//     road: 'Banthatthong',
//     khet: 'Pathumwan',
//     changwat: 'Bangkok',
//     postalCode: '10330'
//   },
//   for: 'U',
//   function: 'func',
//   'has car': true,
//   hasCar: true,
// };

// console.log('nickName : ' + person.nickName)
// console.log('age : ' + person.age)

// for (let key in person) {
//   console.log(key + ' : ' + JSON.stringify(person[key]))
// }

// const user = person;
// user.age = 44;
// console.log(person.age)

// console.log(user === person)

// const user1 = {
//   name: 'a'
// };

// const user2 = {
//   name: 'a'
// };

// const user3 = user1;

// console.log(user1 == user2)

// const user = {
//   email: 'test@gmail.com',
//   password: '11111',
// };

// const user2 = {};

// for (let key in user) {
//   user2[key] = user[key];
// }

// const user3 = {...user};

// const defaultPermission = {canDelete: false, canCreate: false};
// const permission1 = {canView: true};
// const permission2 = {canEdit: false, canDelete: true};

// const user = new Object();
// Object.assign(permission1, permission2, defaultPermission)
/* result from merge between permission2 and defaultPermission
  {
    canEdit: false,
    canDelete: false,
    canCreate: false
  }
*/
/* result from merge between permission1 and result from first merge
  {
    canView: true
    canEdit: false,
    canDelete: false,
    canCreate: false
  }
*/
// console.log(permission1)
// console.log(permission2)

// const newMerge = Object.assign({}, permission1, permission2, defaultPermission)
// const clone = Object.assign({}, defaultPermission);

// const user = {
//   firstName: 'Wissanu',
//   lastName: 'KonjunD',
//   age: 27
// }

// const isEmptyObject = obj => {
//   // let result = true;
//   for (let key in obj) {
//     console.log('key: ' + key)
//     console.log('value: ' + obj[key])

//     // result = false;
//     // break;
//   }
//   // return result;
// };

// isEmptyObject(user)

// #1 Iteration key = firstName
// #2 Iteration key = lastName
// #3 Iteration key = age

// const product = {
//   id: 1,
//   name: 'Coke',
//   price: 15,
//   description: 'Coke is the best',
//   size: 500,
//   unit: 'bottle',
//   'best before': new Date('2022-10-01'),
//   distributor: {
//     name: 'Coca Cola Thailand',
//     address: 'Bangkok 10130'
//   }
// }

// #1
// product.name // 'Coke'
// product.distributor.name // 'Coca Cola Thailand'

// // #2
// product['id'] // 1
// product['distributor']['name'] // 'Coca Cola Thailand
// product['best before']

// product.distributor['name'] // 'Coca Cola Thailand'

// product.distributor // {name: 'Coca Cola Thailand', address: 'Bangkok 10130'}

// product.price = 20;
// product['size'] = 330;

// product.distributor = 'Coca Thailand';

// const input = 'price'
// product[input] // product['price'] => 20 

// product = {
//   id: 1,
//   name: 'Coke',
//   price: 15,
//   description: 'Coke is the best',
//   size: 500,
//   unit: 'bottle',
//   bestBefore: new Date('2022-10-01'),
//   distributor: 'Coca Thailand'
// }

// const distributor = { name: 'Coca Cola Thailand', address: 'Bangkok 10130' };

// const isIdExist = 'id' in product // true
// const isDiscoutnExist = 'discount' in product // false 

// if ('discount' in product) {
//   const netPrice = product.price * (1-product.discount);
// }

// for (let k in product) { // Object.keys, Object.value, Object.entries
//   console.log(k)
// }

// const name = 'Tle'

// console.log(product.distributor);
// delete product.distributor;
// console.log(product.distributor);

// product.distributor = {name: 'Coca Cola New', address: 'Bangkok 10130',};
// product.distributor.address = 'Nonthaburi 30000';

// console.log(product.distributor)

// const product = new Object();

// const user = {
//   username: 'TestUSer',
//   password: '123456789'
// }

// const pi = 3.14
// pi = 22/7;

// const admin = user;
// admin.username = 'Admin';

// user.password = 'ttllee';

// console.log(user.username) //
// console.log(admin.password) //

// const admin1 = { ...user };
// // console.log(admin1)
// admin1.username = 'Superadmin'
// console.log(admin1)
// console.log(user)

// Object.assign(user, admin1)
// console.log(user)

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let totalSalaries = 0;

// for (let key in salaries) {
//   totalSalaries += salaries[key];
// }

// console.log(totalSalaries);

// let menu = {
//   width: '200',
//   height: 300,
//   title: "My menu"
// };


// function multiplyNumeric(obj, times) {
  // const result = {};

  // for (let key in obj) {
  //   if (+obj[key]) {
  //     result[key] = obj[key] * times;
  //   } else {
  //     result[key] = obj[key];
  //   }
  // }
  // return result;

//   const result = { ...obj };

//   for (let key in obj) {
//     if (+obj[key]) result[key] = obj[key] * times;
//   }
//   return result;
// }

// console.log(multiplyNumeric(menu, 10))
// var firstName = 'Aaaaa'; // window.firstName = 'Aaaaaa';

// const person = {
//   firstName: 'Wissanu',
//   lastName: 'KongjunD',
//   // getFullName: function() {
//   //   // return 'Wissanu KongjunD'
//   //   return this.firstName + ' ' + this.lastName
//   // }
//   // getFullName() {
//   //   return 'Wissanu KongjunD'
//   // }
// }

// person.walk = function() {
//   alert('kak kak');
// }

// person.walk = function() {
//   alert('kub kub');
// }

// console.log(person.walk());
// console.log(person.getFullName());
// person.firstName = 'Thongchai';
// console.log(person.getFullName());

// const getFullName = person.getFullName;
// console.log(getFullName())

// window.getFullName();

// const user = {
//   firstName: 'A',
//   lastName: 'B'
// }

// user.getFullName = person.getFullName;
// console.log(user.getFullName());

// function getFullName() {
//   return this.firstName + ' ' + this.lastName;
// }

// const person = {
//   firstName: 'Wissanu',
//   lastName: 'KongjunD',
//   getFullName: function() {    
//     return this.firstName + ' ' + this.lastName
//   }
//   // getFullName: () => this.firstName + ' ' + this.lastName
// }

// console.log(person.getFullName());

// console.log(getFullName());
// person.getFullName = getFullName;
// console.log(person.getFullName());
// user.getFullName = getFullName;
// console.log(user.getFullName());

// var firstName = 'Tle'; // window.firstName = 'Tle'
// console.log(getFullName()); // window.getFullName();

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// console.log(user.ref);

// let calculator = {
//   read: function() {
//     this.a = +prompt('a');
//     this.b = +prompt('b');
//   },
//   sum: function() {
//     return this.a + this.b;
//   },
//   multiply: function() {
//     return this.a * this.b;
//   }
// };

// const ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     alert(this.step);
//     return this;
//   }
// };

// ladder.up(); // undefined
// // console.log(ladder.step)
// ladder.up().up(); // undefined.up()

// ladder.up().up().down().showStep().up().up().showStep();

// const user = {};
// const user = new Object();

// function User(username, password) {
//   this.username = username;
//   this.password = password;
//   this.getHelloMessage = function() {
//     alert('Welcome ' + this.username)
//   }
// }

// const user3 = new User('Superadmin', '12345'); 
// // {username: 'Superadmin', password: '12345'}
// // const user = {
// //   username: 'Superadmin',
// //   password: '12345'
// // }

// const user1 = new User('Tle', 'abcd');
// const user2 = new User('UserTwo', 'oohhpp');
// console.log(user1.getHelloMessage())

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a');
//     this.b = +prompt('b');    
//   }

//   this.sum = function() {
//     return this.a + this.b;
//   }

//   this.mul = function() {
//     return this.a * this.b;
//   }
// }

// const calc = new Calculator();
// calc.read();
// console.log(calc.sum());
// console.log(calc.mul());

// function Accumulator(initialValue) {
//   this.value = initialValue;
//   this.read = function() {
//     const input = +prompt('Enter value');
//     this.value = this.value + input;
//     return this;
//   }
// }

// const acc = new Accumulator(5);
// console.log(acc.value);
// // acc.read().read();
// acc.read()
// acc.read();
// acc.read();
// console.log(acc.value)

// let num = 255;
// console.log(num.toString(16))

//# 1 Math floor
// let num = -7.71;
// console.log(Math.floor(num));

//# 2 Math ceil
// console.log(Math.ceil(num));

//# 3 Math round
// console.log(Math.round(num));

//# 4 Math trunc
// console.log(Math.trunc(num))
// const num = 12.363 ;
// console.log(num.toFixed(2));

// console.log(parseInt('15.01px'));
// console.log(parseFloat('15.01.3.4.5'));

// console.log(Math.random());
// console.log(Math.max(45,67,34,90,11,34,56,99));
// console.log(Math.min(45,67,34,90,11,34,56,99));
// console.log(Math.pow(2, 5)); // 2 ** 5

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// // console.log(random(1, 5));

// function randomInt(min, max) {
//   return min + Math.floor(Math.random() * (max + 1 - min));
// }

// console.log(randomInt(1, 6));

// const str = 'I\'m a programmer'; 
// const str = "I'm a programmer";
// const str = "you say \"Hello world\""
// \var\www\
// const str = '\\var\\www\\';
// // \n 
// console.log(str)

// let str = "Happy XXX Year XYZWA" // 'HAPPY XXX YEAR'
// console.log(str.length)
// console.log(str[20])
// console.log(str.charAt(6))

// str.charAt[6] = 'O';

// for (let s of str) {
//   console.log(`${s}\n`)
// }
// console.log((1.23).toFixed(1));
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log("Happy New Year".toLowerCase())

// console.log(str.toLowerCase().indexOf('xxx'));
// console.log(str.lastIndexOf('Xx'));

// slice, substr, substring
// const sliced = str.slice(0, 5)
// const slicedBack = str.slice(-4, -2)

// const substringed = str.substring(4, 0)

// const substred = str.substr(2, 5);

// console.log(str)
// console.log(substred)

// let testText = 'Widget with id';
// console.log(testText.includes('By'))
// console.log(testText.startsWith('W'));
// console.log(testText.endsWith('with'));

// function ucFirst(str) {
//   if (typeof str !== 'string') return 'Require input string';
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

// function checkSpam(str) {
//   if (typeof str !== 'string') return 'Require input string';
//   checkedString = str.toLowerCase();
//   return checkedString.includes('xxx') || checkedString.includes('viagra');
// }

// console.log(checkSpam('VIAGRA'));

// const truncate = function(str, maxlength) {
//   let result = str;

//   if (str.length > maxlength) {
//     // result = str.slice(0, maxlength) + '...';
//     // result = str.substring(0, maxlength) + '...' ;
//     result = str.substr(0, maxlength) + '...' ;    
//   }
//   return result
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20));

// const extractCurrencyValue = function(str, rate) {
//   // const dollar = str.slice(1);
//   // return dollar * rate;
//   return str.slice(1) * rate;
// };

// console.log(extractCurrencyValue('$120', 30.5));

// let str = '  Wissanu '
// str = str.trim(); // remove white space

// let str = `What I'd like to tell on this topic is:`;
// let arr = str.split(' ');
// console.log(arr);

// let str = 'Hello';
// let arr = str.split('');
// console.log(arr);

// let students = new Array();

// const product = {
  //   name: 'Coke',
  //   saleHistory: [
    //     {
      //       date: '20-01-2021',
      //       amount: 2,
      //       unitPrice: 15
      //     },
      //     {
        //       date: '23-01-2021',
        //       amount: 10,
        //       unitPrice: 14
        //     }
        //   ]
        // }

// const students = ['Note', 'Beer', [1, 2, 8, { firstName: 'Tle' }]];
// console.log(students[2]);

// students[2] = 'Snap';
// console.log(students[2]);

// students[3] = 'Ham';
// console.log(students[3])

// // students[100] = 'Sun';
// students[students.length] = 'Sun';
// console.log(students.length)

// const auxArr = [function() {console.log('Hello Array')}];
// auxArr[0]();
// delete students[2];
// console.log(students);

// const students = ['Note', 'Beer', 'Snap', 'Ham', 'Sun'];

// // #1 push
// console.log(students.push('Leo', 'Palm'));
// console.log(students);

// // #2 pop
// console.log(students.pop());
// console.log(students);

// // #3 unshift
// console.log(students.unshift('Micky', 'Game'));
// console.log(students);

// // #4 shift
// console.log(students.shift());
// console.log(students);

// const newStudents = students;
// newStudents.push('Micky');
// console.log(students);

// const newStudents = [...students];
// students.firstName = 'Wissanu';

// students.length = 2;
// console.log(students);

// for (let i = 0; i < students.length; i++) {
//   console.log(i + '. ' + students[i])
// }

// let i = 0;
// for (let stu of students) {
//   console.log(i + '. ' + stu)
//   i++;
// }

// function logName(name) {
//   console.log(name);
// }

// ["Game", "Note", "Beer", "Snap", "Ham", "Sun", "Leo"]
// students.forEach(logName);

// students.forEach(function(name, index, arr) {
//   console.log(name, index, arr);
//   // console.log(index)
//   // console.log(arr)
// });

// students.forEach(name => console.log(name));

// Iteration 1 call function(stu) {console.log(stu)} ; stu = 'Game'
// Iteration 2 call function(stu) {console.log(stu)} ; stu = 'Note'
// Iteration 3 call function(stu) {console.log(stu)} ; stu = 'Note'

// const numbers = [2, 3, 5, 7, 11, 13];
// find newNumbers = [4, 9, 25, 49, 121, 169];

// find unique students name
// students.includes('Palm'), students.indexOf('Palm')
// const students = [
//   'Palm',
//   'Micky', 
//   'Boss', 
//   'Palm', 
//   'Sine', 
//   'Beer', 
//   'Boss',
//   'Snap',
//   'Micky',
//   'Palm',
//   'Sine'
// ]; // ['Palm', 'Micky', 'Boss', 'Sine', 'Beer', 'Snap'];

// console.log(students.indexOf('PalmMicky'));

// const result = [];

// for (let i = 0; i < numbers.length; i++) {
//   result.push(numbers[i] ** 2);
// }

// for (let num of numbers) {
//   result.push(num ** 2);
// }

// numbers.forEach(num => {
//   result.push(num ** 2);
// });

// console.log(result)

// for (let i = 0; i < students.length; i++) {  
//   if (!result.includes(students[i])) result.push(students[i]);
// }

// for (let stu of students) {
//   if (!result.includes(stu)) result.push(stu);
// }

// students.forEach(stu => {
//   if (!result.includes(stu)) result.push(stu);
//   // if (result.indexOf(stu) === -1) result.push(stu);
// });

// function foreeach(cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr)
//   }
// }

// students.forEach((value, index, arr) => {

// });

// console.log(result)

// let arr = new Array("Apple", "Pear", "etc"); // ['Apple', 'Pear', 'etc']
// arr = ['Apple', 'Pear', 'etc']

// let arr = new Array(2); // not [2]; array length = 2

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr[1][1]);

// const styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll'); // ['Jazz', 'Blues', 'Rock-n-Roll']
// styles[1] = 'Classics'; // ['Jazz', 'Classics', 'Rock-n-Roll']
// styles.shift(); // ['Classics', 'Rock-n-Roll']
// styles.unshift('Rap', 'Reggae'); // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']
// console.log(styles);

// const sumInput = () => {
//   const inputs = [];
//   while (1) {
//     const newValue = prompt('Enter value'); // '    ' => ''  
//     // if (!newValue) break; // break if newValue is Nan or 0
//     if (isNaN(newValue) || newValue === null || newValue.trim() === '') break;
//     inputs.push(+newValue);
//   }
//   let sum = 0;
//   inputs.forEach(value => {
//     sum += value;
//   });
//   console.log(sum);
// }

// const newValue = prompt('Enter value');
// console.log(NaN === NaN)
// const int = 4; // 0, '', null, undefined, Nan
// if (int) 

// sumInput();

// const numbers = [2, 3, 5, 7, 11, 13]; // [2, 3, 7, 11, 13]
// delete numbers[2]

// console.log(numbers.splice(2, 2, 9));
// numbers.splice(3, 2)
// numbers.splice(-1, 0, 9, 17, 37);
// console.log(numbers.slice(2, 4))
// console.log(numbers)

// const arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1));
// console.log(arr.slice(-2, -1));

// const names = ['Sun', 'Boss', 'Note', 'Beer', 'Leo', 'Boss', 'Micky'];
// const anotherNames = ['Note', 'Beer'];
// const anotherNames1 = ['Leo', 'Palm', 'Micky'];

// console.log(names.concat(anotherNames, anotherNames1));
// console.log(names)

// console.log([...names, ...anotherNames, ...anotherNames1])

// const result = names.find((value, index, arr) => { 
//   return value === 'Boss' 
// });

// const ind = names.findIndex((value, index, arr) => { 
//   return value === 'Bss' 
// });

// console.log(ind)

// function read(obj) {
//   console.log(obj.name);
// }

// read({ name: 'Tle' });

// const users = [
//   { 
//     id: 1, 
//     name: "John",
//     address: {
//       province: 'Bangkok',
//       district: 'Pathumwan'
//     }
//   },
//   { 
//     id: 2, 
//     name: "Pete",
//     address: {
//       province: 'Loei',
//       district: 'Chiang Kan'
//     }
//   },
//   { 
//     id: 3, 
//     name: "Mary",
//     address: {
//       province: 'Trat',
//       district: 'Koh Chang'
//     }
//   },
//   { 
//     id: 4, 
//     name: "Jim",
//     address: {
//       province: 'Bangkok',
//       district: 'Ladprao'
//     }
//   }
// ];

// const name = users.find(item => {
//   return item.name.toLowerCase() === 'pete';
// });

// const name = users.find(item => {
//   return item.address.district === 'Pathumwan';
// });

// Iteration #1 item = { id: 1, name: "John" }
// Iteration #2 item = { id: 2, name: "Pete" }
// Iteration #3 item = { id: 3, name: "Mary" }

// console.log(name);

// const indexToEdit = users.findIndex(item => item.name === 'Pete');

// if (indexToEdit !== -1) users[indexToEdit].name = 'Tim';
// console.log(users)

// const numbers = [7, -3, -19, 2, -11, 13, 5];

// const greaterThanSix = numbers.find(item => item > 6); // 7
// const greaterThanSix = numbers.filter(item => item > 6); // [7, 11, 13]
// console.log(greaterThanSix);

// const usersInBangkok = users.filter(item => item.address.province === 'Bangkok');
// console.log(usersInBangkok);

// const numbersPowerTwo = numbers.map(item => item ** 2); // [4, 9, 25, 49, 121, 169];
// console.log(numbersPowerTwo);

// numbers.sort();
// console.log(numbers);

// numbers.sort((a, b) => {
//   // if (a < b) return -1;
//   // if (a === b) return 0;
//   // if (a > b) return 1;
//   return a - b;
// });

// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const str = 'Hello World';
// const splitted = str.split(' ');
// console.log(splitted);

// qs => id=1&&name=John&&orderBy=name&&limit=25
// const queryString = ['id=1', 'name=John', 'orderBy=name', 'limit=25'];
// const qs = queryString.join('&&') // id=1&&name=John&&orderBy=name&&limit=25
// console.log(qs);

// const str = 'Hello codecamp';

// console.log(typeof numbers);
// console.log(Array.isArray(str))

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i] ** 2;
  // }
// const numbers = [-1, 4, -3, 17, 7, -2];

// function cb(previousValue, item, index, arr) {  
//   return previousValue + item ** 2;
// }

// const sumRed = numbers.reduce(cb, 0);
// console.log(sumRed)
// #Ite 1 call cb(0, -1, 0, [-1, 4, -3, 17, 7, -2]); return 1 => next previousValue(#Ite 2)
// #Ite 2 call cb(1, 4, 1, [-1, 4, -3, 17, 7, -2]); return 17 => next previousValue(#Ite 3)
// .
// .
// .
// #Ite last cb(364, -2, 5, [-1, 4, -3, 17, 7, -2]) return 368 => return result of reduce method

// numbers.reduce(function(previousValue, item, index, arr) {

// }, null);

// ข้อ 1 หา array ที่มีชื่อ unique
// ข้อ 2 ให้นับจำนวนครั้วที่ซ้ำของแต่ละชื่อ

// const students = [
//   'Palm',
//   'Micky', 
//   'Boss', 
//   'Palm', 
//   'Sine', 
//   'Beer', 
//   'Boss',
//   'Snap',
//   'Micky',
//   'Palm',
//   'Sine'
// ]; // ['Palm', 'Micky', 'Boss', 'Sine', 'Beer', 'Snap'];
// Palm : 3
// Mickey : 2
// Boss : 2
// Sine : 2
// Beer : 1

// const username = prompt('Enter username');
// const role = username === null || username === '' ? 'Guest' : 'User'

// const numbers = [-1, 4, -3, 17, 7, -2];
// const newNumber = numbers;

// const newNumber = [...numbers, 29] // [-1, 4, -3, 17, 7, -2, 29]
// const newNumber = [13, ...numbers, 29] // [13, -1, 4, -3, 17, 7, -2, 29]

// console.log(uniqueStudents);

// const numbers = [-1, 4, -3, 17, 7, -2];

// const sum = numbers.reduce(function(accumulator, item) {
//   const result = accumulator + item;
//   return result;
// }, 0);

// round   previousAccumulator   currentValue   nextAccumulator
// 1       0                     -1             -1
// 2       -1                    4              3
// 3       3                     -3             0
// 4       0                     17             17
// 5       17                    7              24
// 6       24                    -2             22

// ['Palm','Micky','Boss','Palm','Sine','Beer','Boss','Snap','Micky','Palm','Sine']

// const uniqueStudents = students.reduce((acc, item) => {  
//   if (!acc.includes(item)) {
//     acc.push(item);
//   }

//   return acc;
//   // console.log(acc)
//   // return !acc.includes(item) ? [...acc, item] : acc;
// }, []);

// round   previousAccumulator       currentValue   nextAccumulator
// 1       []                        'Palm'         ['Palm']
// 2       ['Palm']                  'Micky'        ['Palm', 'Micky']
// 3       ['Palm', 'Micky']         'Boss'         ['Palm', 'Micky', 'Boss']
// 4       ['Palm', 'Micky', 'Boss'] 'Palm'         ['Palm', 'Micky', 'Boss']         
// 5       ['Palm', 'Micky', 'Boss'] 'Sine'         ['Palm', 'Micky', 'Boss', 'Sine']
// 6       ['Palm', 'Micky', 'Boss', 'Sine']

// {
//   'Palm': 3,
//   'Micky': 2,
//   'Boss': 2
// }

// const user = {
//   nickName: 'Tle'
// }

// user.nickName // 'Tle'
// user.lastName // undefined

// const reduceCount = (acc, item) => {
//   // if (!item in acc) { 
//   //   acc[item] = acc[item] + 1;
//   // } else {
//   //   acc[item] = 1;
//   // }  

//   // if (acc[item]) { 
//   //   acc[item] += 1;
//   // } else {
//   //   acc[item] = 1;
//   // }

//   // acc[item] = acc[item] ? acc[item] + 1 : 1;

//   acc[item] = (acc[item] || 0) + 1;

//   return acc;
// }

// const count = students.reduce(reduceCount, {});

// // round acc                                 item       nextAcc
// // 1     {}                                  'Palm'     {'Palm': 1}
// // 2     {'Palm': 1}                         'Micky'    {'Palm': 1, 'Micky': 1}
// // 3     {'Palm': 1, 'Micky': 1}             'Boss'     {'Palm': 1, 'Micky': 1, 'Boss': 1}
// // 4     {'Palm': 1, 'Micky': 1, 'Boss': 1}  'Palm'     {'Palm': 2, 'Micky': 1, 'Boss': 1}

// const num = null || '' || 7 || 8000; // 7
// const an = 'Test' && null && ''; // null

// const array1 = [1, 2, 30, 400]
// const array2 = array.map(item => item * 2);

// const array1 = [1, 2, 3, 4];
// const array2 = array1.map(item => String(item))
// const array2 = array1.map(item => '' + item)
// const array2 = array1.map(item => `${item}`)

// const array1 = [1, "1", 2, {}] 
// const array2 = array1.map(item => typeof item)

// const array1 = ["apple", "banana", "orange"]
// const array2 = array1.map(item => item.toUpperCase())

// const array1 = [
//   { name: "apple", age: 14 },
//   { name: "banana", age: 18 },
//   { name: "watermelon", age: 32 },
// ]
// const array2 = array1.map(item => item.name)
// const array2 = array1.map(item => item.age)

// const array1 = [
//   { name: "apple", surname: "London" },
//   { name: "banana", surname: "Bangkok" },
//   { name: "watermelon", surname: "Singapore" },
// ]
// const array2 = array1.map(item => item.name + ' ' + item.surname);
// const array2 = array1.map(item => `${item.name} ${item.surname}`);

// const array1 = [1,3,4,5,6,7,8]
// const array2 = array1.map(item => item % 2 === 0 ? 'even' : 'odd');

// const array1 = [1, -3, 2, 8, -4, 5]
// const array2 = array1.map(item => item > 0 ? item : item * -1)
// const array2 = array1.map(item => Math.abs(item))

// const array1 = [100, 200.25, 300.84, 400.3];
// const array2 = array1.map(item => item.toFixed(2))

// const array3 = [...array1, 500]

// const array1 = [
//   { name: "apple", birth: "2000-01-01" },
//   { name: "banana", birth: "1990-10-01" },
//   { name: "watermelon", birth: "1985-12-01" },
// ]
// const array2 = array1.map(item => {
//   const birth = new Date(item.birth)
//   const now = new Date()
//   // return now.getFullYear() - birth.getFullYear();
//   // return {
//   //   name: item.name,
//   //   birth: item.birth,
//   //   age: now.getFullYear() - birth.getFullYear()
//   // }

//   let age;
//   if (now.getMonth < birth.getMonth) {
//     age = now.getFullYear() - birth.getFullYear() - 1;
//   } else if (now.getMonth > birth.getMonth) {
//     age = now.getFullYear() - birth.getFullYear()
//   } else {
//     if (now.getDate < birth.getDate) {
//       age = now.getFullYear() - birth.getFullYear() - 1;
//     } else {
//       age = now.getFullYear() - birth.getFullYear()
//     }
//   }


//   return {
//     ...item,
//     age, // age: age    
//   }
// })

// const array2 = array1.map(item => (
//   {
//     ...item, 
//     age: new Date().getFullYear() - new Date(item.birth).getFullYear()
//   }
// )

// const person = { firstName: 'W', lastName: 'K' };
// const person1 = {...person, age: 20, firstName: 'A'};
// const person2 = { age: 20, firstName: 'A', ...person};  
// { firstName: 'W', lastName: 'K', age: 20 }

