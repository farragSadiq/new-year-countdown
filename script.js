const loading = document.getElementById("loading");
const year = document.getElementById("year");
const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYear = new Date("jan 01 2023 00:00:00");

year.innerHTML = +currentYear + 1;

function countDown() {
  const now = new Date();
  const timeLeft = newYear - now;
  const daysleft = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  const hoursleft = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  const minutesleft = Math.floor(timeLeft / 1000 / 60) % 60;
  const secondsleft = Math.floor(timeLeft / 1000) % 60;
  days.innerHTML = daysleft < 10 ? "0" + daysleft : daysleft;
  hours.innerHTML = hoursleft < 10 ? "0" + hoursleft : hoursleft;
  minutes.innerHTML = minutesleft < 10 ? "0" + minutesleft : minutesleft;
  seconds.innerHTML = secondsleft < 10 ? "0" + secondsleft : secondsleft;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(countDown, 1000);
