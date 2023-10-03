// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
const startBtn = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const today = new Date();
let selectedDate;
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: today,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('selectedDates:', selectedDates);
    if (selectedDates[0] <= today) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      selectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

const datetimePicker = document.querySelector('#datetime-picker');
flatpickr(datetimePicker, options);

flatpickr(datetimePicker, options).config.onError = function (error) {
  console.error('Flatpickr Error:', error);
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}

let countdownInterval = null;

startBtn.addEventListener('click', () => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  let selectedDateMi = selectedDate.getTime();

  let timeDifference = selectedDateMi - new Date().getTime();

  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    daysElement.textContent = addLeadingZero(days);
    hoursElement.textContent = addLeadingZero(hours);
    minutesElement.textContent = addLeadingZero(minutes);
    secondsElement.textContent = addLeadingZero(seconds);

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
    }

    timeDifference -= 1000;
  }, 1000);

  startBtn.disabled = true;
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
