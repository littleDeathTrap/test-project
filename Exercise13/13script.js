//Напишіть функцію, щоб розділити рядок і перетворити його на масив слів.

//"Robin Singh" ==> ["Robin", "Singh"]

//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

const str = "I love arrays they are my favorite";
function splitString() {
return str.split(" ");
}
console.log(splitString(str));
