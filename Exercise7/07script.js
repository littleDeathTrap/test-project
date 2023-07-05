//№1
const maxNumber = (a, b) => {
  return a > b ? a : b;
};
const result = maxNumber(91, 21);
console.log("Більше значення: " + `${result}`);

//№2
const checkAge = (age) => {
  const adultAge = 18;
  return age >= adultAge ? true : false;
};
let userAge = 23;
const chech = checkAge(userAge);
console.log(chech);

//№3
let str = prompt("Введіть довільний рядок:");
let maxLengthString = +prompt("Введіть максимальну довжину рядку:");
const stringTruncation = () => {
  if (str.length > maxLengthString) {
    str = str.slice(0, maxLengthString - 1) + "…";
  }
  return str;
};
let result2 = stringTruncation();
console.log(result2);

//№4
const checkWord = (str, word) => {
    return str.includes(word)};
    const str1 = "якщо слово знаходиться у рядку";
    const findWord = "якщо";
  let hasSubStr = checkWord(str1, findWord);
  console.log("Знаходиться слово в рядку? " + `${hasSubStr}`);


