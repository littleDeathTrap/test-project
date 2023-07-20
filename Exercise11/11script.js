//Напишіть функцію, яка приймає список рядків і повертає кожен рядок, перед яким стоїть правильне число.
//Нумерація починається з 1. Зверніть увагу на двокрапку та пробіл між ними.
//[] --> []
//--> ["1: a", "2: b", "3: c"]

const arrayOfString = ["a", "b", "c"];
const acceptsListString = (array) => {
  return array.map((item, index) => `${index + 1}: ${item}`);
};
console.log(acceptsListString(arrayOfString));
