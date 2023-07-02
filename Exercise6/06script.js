//1. Написати функцію maxNumber(a, b), яка отримує два числа, то повертає більший з них.

//2. Написати функцію checkAge(age), яка отримую вік користувача і якщо йому меньше 18, тоді повертати false, інакше - true

//3. Переписати  “ДЗ 4. Усічення рядка” на окрему функцію.

//Можете залишити prompt, або отримувати параметри, як аргумент.

//4. Напишіть функцію checkWord(str, word), яка приймає рядок str і слово word.

//Функція має повернути true, якщо слово знаходиться у рядку, інакше повернути false.

//№1
// function maxNumber(a, b) {
//   return Math.max(a, b);
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let result = maxNumber(17, 23);
// console.log(result);

//№1 варіант 2
function maxNumber(a, b){
    return a > b ? a : b;
}
console.log("91 и 21.Більше значення- " + maxNumber(91, 21));


// //№2
function checkAge(age) {
  const adultAge = 18;
  if (age > adultAge) {
    return true;
  } else {
    return false;
  }
}
let userAge = 23;
let check = checkAge(userAge);
console.log(check);

//№2 варіант 2
// function checkAge(age){
//     const adultAge = 18;
//     return age > adultAge ? true : false;
// }
// let userAge = 23;
// let check = checkAge(userAge);
// console.log(check);


//№3(залишити prompt)
function stringTruncation(){
  if(str.length > maxLengthString)
    str = str.slice(0, maxLengthString - 1) + "…";
    return str;
}
let str = prompt("Введіть довільний рядок:");
let maxLengthString = +prompt("Введіть максимальну довжину рядку:");
let result2 = stringTruncation();
console.log(result2);


//№3 варіант2(як аргумент)
// function stringTruncation(str, maxLengthString){
//   if(str.length > maxLengthString)
//     str = str.slice(0, maxLengthString - 1) + "…";
//     return str;
// }
// let str = "ddddddddddddd";
// let maxLengthString = 4;
// let result2 = stringTruncation(str, maxLengthString);
// console.log(result2);


//№4
function checkWord(str, word) {
  return str.includes(word);
}
let str1 = "якщо слово знаходиться у рядку";
let findWord = "слово";
let hasSubStr = checkWord(str1, findWord);
console.log(hasSubStr);
