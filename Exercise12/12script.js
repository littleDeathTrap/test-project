//Дано масив цілих чисел.
//Повертає масив, де перший елемент — це кількість додатних чисел, а другий — сума від’ємних чисел. 0 не є ні позитивним, ні негативним.
//Якщо введення є порожнім масивом або має значення null, повертає порожній масив.
//Приклад:

const smaller = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]; // [10, -65]
//smaller([]) // [].

function countNumbers(array) {
  if (!array || array.length === 0) {
    return [];
  }
  const positiveList = array.filter((item) => item > 0).length;
  const negativeList = array
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);
  return [positiveList, negativeList];
}
console.log(countNumbers(smaller));
console.log(countNumbers([]));
console.log(countNumbers(null));

//№2варіант

function countNumbs(array) {
  if (!array || array.length === 0) {
    return [];
  }
  positiveValue = 0;
  negativeValue = 0;
  array.forEach((element) => {
    if (element > 0) {
      positiveValue++;
    } else if (element < 0) {
      negativeValue += element;
    }
  });
  return [positiveValue, negativeValue];
}
console.log(countNumbs(smaller));
console.log(countNumbs([]));
console.log(countNumbs(null));
