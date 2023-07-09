//Створити попоредньо створити массив елементів.

//1. Треба пройтись по всім елементам массива на вивести їх у консоль.
//1.1. Зробити будь-яку перевірку (це може бути на довженну рядка або на порівняння з числом), щоб консоль робилась для певних елементів.

//2. Реалізувати функцію, яка має приймати массив та елемент, який ми будемо шукати.
//Функція має шукати елемент у массиві та повертати true або false;

//3. У вас є список юзерів ['user', 'user1', 'user10', 'user100', 'user1000'], вам потрібно повернути перший елемент, який відповідає умові str.length > 4

//4. У нас є массив з попереднього завдання, але треба повернути не перший елемент, а массив всіх значеннь. Треба зробити фільтрацію.

const arrayOfNumbers = [3, 10, 25, 1, 420, 18];
const arrayOfString = ['user', 'user2', 'user20', 'user200'];
//№1
//arrayOfNumbers.forEach(item => console.log(item));

//№1.1 варіант 1
const num  = [];
function showEachNum(item) {
    if(item >= 18){
        num.push(item);
    }
}
arrayOfNumbers.forEach(showEachNum);
console.log(num);

//№1.1 варіант 2
function lengthStr(arrayOfString){
return arrayOfString.filter((str1) => str1.length >= 5);
}
console.log(lengthStr(arrayOfString));


//№2
function checkInArray(array, elem) {
  const subArray = array.filter((item) =>
    item.toString().includes(elem.toString())
  );
  return subArray.length > 0;
}

console.log(checkInArray(arrayOfNumbers, 42));

//№3
const userList = ["user",  "user1", "user10", "user100", "user1000"];
function findFirstStr(userList) {
 return userList.find((str) => str.length > 4);
}
console.log(findFirstStr(userList));

//№4
const filterElem = userList.filter((item) => item.length > 4);
console.log(filterElem);