//№1 Є вартість у вигляді рядка "$120". Тобто спочатку йде знак валюти, а потім число.
// Напишіть скрипт, який з такого рядка виділятиме числове значення і повертатиме його.
let costString = "$120";
let numReturn = parseInt(costString.slice(1));
console.log(numReturn);
