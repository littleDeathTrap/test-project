//Напишіть функцію findAverage(array), яка приймає массив чисел та обчислює середнє значення чисел.
//Приклад:
const arrayOfNumbers = [1, 2, 4, 7, 10]; // 4.8
//findAverage([]) // 0
//Примітка: Порожні масиви мають повертати 0.

const findAverage = (array) => {
  if (!array || array.length === 0) {
    return 0;
  }
  const sumValue = array.reduce((acc, item) => acc + item);
  const averageValue = sumValue / array.length;
  return averageValue;
};
console.log(findAverage(arrayOfNumbers));
console.log(findAverage([]));
