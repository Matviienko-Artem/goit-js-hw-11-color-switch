import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

console.log(colors);

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', startColorCircle);
refs.btnStop.addEventListener('click', stopColorCircle);

let intervalId = null;

function startColorCircle() {
  colors.forEach((num, index) => {
    console.log(`Цвет: ${num}, Индекс: ${index}`);
    refs.bodyRef.style.backgroundColor = '#795548';
  });

  intervalId = setInterval(() => {
    let randomNumber = randomIntegerFromInterval(0, 6);
    console.log(randomNumber);
  }, 1000);
}

function stopColorCircle() {
  clearInterval(intervalId);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
