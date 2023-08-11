const value = document.querySelector("#value");
const btnContainer = document.querySelector(".button-container");
let count = 0;
const handleBtnClick = (e) => {
  const eventName = e.target.classList[1];
  /*
  switch (eventName) {
    case "decrease":
      count -= 1;
      break;
    case "reset":
      count = 0;
      break;
    case "increase":
      count += 1;
      break;
    default:
      count = count;
  }*/

  if (eventName === "decrease") {
    count -= 1;
  } else if (eventName === "reset") {
    count = 0;
  } else if (eventName === "increase") {
    count += 1;
  } else count = count;

  value.innerHTML = count;
};

btnContainer.addEventListener("click", handleBtnClick);
