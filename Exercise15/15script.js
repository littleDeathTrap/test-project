//За допомогою циклу for виведіть парні числа від 2 до 10.

function outputEvenNumbers(num) {
  let evenNumb = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      evenNumb.push(num[i]);
    }
  }
console.log("Парні числа: " + evenNumb);
}
outputEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

