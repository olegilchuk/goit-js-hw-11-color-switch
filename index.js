const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBt: document.querySelector('[data-action="start"]'),
  stopBt: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorRun() {
  refs.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let watchId = null;

function startBaGr() {
  refs.startBt.disabled = true;
  watchId = setInterval(colorRun, 1000);
  console.log("startBaGr");
}

function stopBaGr() {
  refs.startBt.disabled = false;
  clearInterval(watchId);
  console.log("stopBaGr");
}

refs.startBt.addEventListener("click", startBaGr);
refs.stopBt.addEventListener("click", stopBaGr);
