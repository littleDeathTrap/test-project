//Є массив:
//const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
//Перше завдання:
//Вам треба перевірити чи всі елементи довше ніж 4 символа.
//Та вивести у консоль результат (true або false).

//Друге завдання:
//Вам треба перевірити хочаб один елемент довше ніж 4 символа.
//Та вивести у консоль результат (true або false).

//Трете завдання:
//Потрібно перетворити массив користувачів таким чином, щоб ми отримали новий массив з назвамикористувачів написанних капслоком.
//Приклад: user1 -> USER1

//№1
const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
function checkEvery(users){
return users.every(item => item.length > 4);
}
console.log(checkEvery(users));

//№2
const someResult = users.some(item => item.length > 4);
console.log(someResult);

//№3
const newArrayMap = users.map(item => item.toUpperCase());
console.log(newArrayMap);
