//Створити функції getData, за допомогою fetch + async \ await , яка прийматиме параметр url,
// на яким потрібно зробити запит і повернути отримане значення.
//Використовуйте https://jsonplaceholder.typicode.com/posts

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getData();

const fetchAllData = async () => {
  try {
    const promiseResponse = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);

    const postResponse = promiseResponse[0];
    const postResponse2 = promiseResponse[1];

    const postData = await postResponse.json();
    const postData2 = await postResponse2.json();

    console.log(postData);
    console.log(postData2);
  } catch (e) {
    console.log(e);
  }
};

fetchAllData();
