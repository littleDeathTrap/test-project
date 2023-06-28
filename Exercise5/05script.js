//№5 Запитайте через prompt довільний рядок.
//Перевірте, чи містить цей рядок "free". І поверніть true чи false.

let str = prompt("Введіть довільний рядок:");
let hasFree = str.toLowerCase().includes("free");
console.log(hasFree);