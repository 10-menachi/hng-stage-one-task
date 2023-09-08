const current_time_div = document.querySelector('.current-time');
const current_day_div = document.querySelector('.day-of-the-week');
const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
current_day_div.innerHTML = `${daylist[day]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

function formatTime(number) {
  return number.toString().padStart(2, '0');
}

setInterval(() => {
  const today = new Date();
  const hours = formatTime(today.getHours());
  const minutes = formatTime(today.getMinutes());
  const seconds = formatTime(today.getSeconds());
  current_time_div.innerHTML = `${hours}:${minutes}:${seconds}.`;
}, 1000);
