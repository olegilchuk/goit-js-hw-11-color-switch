// const refs = {
//   daysText: document.querySelector('[data-value="days"]'),
//   hoursText: document.querySelector('[data-value="hours"]'),
//   minutesText: document.querySelector('[data-value="mins"]'),
//   secondsText: document.querySelector('[data-value="secs"]'),
//   // weekText: document.querySelector('[data-value="week"]'),
//   // yearText: document.querySelector('[data-value="year"]'),
// };

// let watchId = null;
// let andDate = null;
// let result = null;
// let startDete = null;
// let seconds = null;
// let minutes = null;
// let hours = null;
// let days = null;
// let week = null;
// let year = null;

// function timer() {
//   result = Math.floor((andDate - new Date()) / 1000);

//   seconds = result % 60;
//   minutes = Math.floor(result / 60) % 60;
//   hours = Math.floor(result / 3600) % 24;
//   days = Math.floor(result / 86400);
//   // days = Math.floor(result / 86400) % 7;
//   // week = Math.floor(result / 604 800) % 52;
//   // year = Math.floor(result / 31 556 926);
//   refs.secondsText.textContent = seconds < 10 ? `0${seconds}` : seconds;
//   refs.minutesText.textContent = minutes < 10 ? `0${minutes}` : minutes;
//   refs.hoursText.textContent = hours < 10 ? `0${hours}` : hours;
//   refs.daysText.textContent = days < 10 ? `0${days}` : days;
//   // refs.weekText.textContent = week < 10 ? `0${week}` : week % 52;
//   // refs.yearText.textContent = year < 10 ? `0${year}` : year;
// }

// function start() {
//   startDete = new Date();
//   andDate = new Date('Aug 10, 2022');
//   watchId = setInterval(timer, 1000);
// }
// start();

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  startBt: document.querySelector('[data-action="start"]'),
  stopBt: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let watchId = null;

function startBaGr() {
  watchId = setInterval(colors, 1000);
}

function stopBaGr() {
  clearInterval(watchId);
  console.log('stopBaGr');
}

refs.startBt.addEventListener('click', startBaGr);
refs.stopBt.addEventListener('click', stopBaGr);
