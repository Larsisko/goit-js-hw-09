function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let interval = null;

startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;

    console.log('jazda');
    startBtn.disabled = true;
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled = false;
  console.log('finito');
});
