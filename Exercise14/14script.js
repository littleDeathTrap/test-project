//Перепишіть код за допомогою однієї конструкції switch:
const number = +prompt('Введіть число між 0 та 3', '');

switch(number){
    case 0: 
    alert('Ви ввели число 0');
    break;
    case 1: 
    alert('Ви ввели число 1');
    break;
    case 2:
    case 3:
    alert('Ви ввели число 2, а може й 3');
    break;
    default:
        alert('Введене число не правильне');
}