const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${fillZero(hours)}:${fillZero(minutes)}:${fillZero(
    seconds
  )}`;
}

function fillZero(num) {
  return num < 10 ? `0${num}` : num;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // 1秒
}

init();
