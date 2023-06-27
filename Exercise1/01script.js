
//1. Треба конвертувати у string наступні значення:
//true, 1000, null, undefined
//2. Треба конвертувати у number наступні значення:
//“123a”, “1000”, null, undefined, false
//3. Треба конвертувати у boolean наступні значення:
//null, undefined, “”, 0, “ “, 1000, “1200”,

//№1
const str1 = String(true);
console.log(typeof str1);

const str2 = 1000;
const strValue2 = str2.toString();
console.log(strValue2);

const str3 = String(null);
console.log(str3);

const str4 = String(undefined);
console.log(typeof str4);

//№2
const num1 = '123a';
const isNumber = parseInt(num1);
console.log(isNumber);

const num2 =+ '1000';
console.log(num2);

const num3 = Number(null);
console.log(num3);

const num4 =+ undefined;
console.log(num4);

const num5 = Number(false);
console.log(typeof num5);
//№3
const hasBoolean1 = null;
const isBoolean = Boolean(hasBoolean1);
console.log(typeof isBoolean);

const hasBoolean2 = Boolean(undefined);
console.log(hasBoolean2);

const hasBoolean3 = Boolean("");
console.log(hasBoolean3);

const hasBoolean4 = Boolean(0);
console.log(hasBoolean4);

const hasBoolean5 = Boolean(" ");
console.log(hasBoolean5);

const hasBoolean6 = Boolean(1000);
console.log(hasBoolean6);

const hasBoolean7 = Boolean("1200");
console.log(typeof hasBoolean7);