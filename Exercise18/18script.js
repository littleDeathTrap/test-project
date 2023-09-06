//За допомогою fetch треба зробити запит на будь-який сервіс з https://jsonplaceholder.typicode.com/. 
//Це може бути /posts, /users або інші.
//Зробити запит, розпарсити данні з json, та вивести у консоль результат.

const post = {
    body:"text",
    username : "test",
    age : 352
}

const res =  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(post)
});

res.then(x => {
    return x.json();
}).then(x => {
    console.log(x);
}).catch((error)=>{
    console.log(error.message);
});


const res2 =  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET"
});

res2.then(x => {
    return x.json();
}).then(x => {
    console.log(x);
}).finally(()=>{
    console.log('finally');
});


const res3 =  fetch('https://jsonplaceholder.typicode.com/posts2', {
    method: "GET"
});

res2.then(x => {
    return x.json();
}).then(x => {
    console.log(x);
}).catch((error)=>{
    console.log(error.message);
});