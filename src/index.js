import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', startColorCircle);
refs.btnStop.addEventListener('click', stopColorCircle);

let intervalId = null;

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopColorCircle() {
  refs.btnStart.disabled = false;
  clearInterval(intervalId);
}

function startColorCircle() {
  refs.btnStart.disabled = true;
  intervalId = setInterval(() => {
    const randomNumber = randomIntegerFromInterval(0, 6);
    refs.bodyRef.style.backgroundColor = `${colors[randomNumber]}`;
    console.log(randomNumber);
  }, 1000);
}
