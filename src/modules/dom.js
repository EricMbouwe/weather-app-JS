const city = document.querySelector('.location .city');
const date = document.querySelector('.location .date');
const temp = document.querySelector('.current .temp');
const weather = document.querySelector('.current .weather');
const hi = document.querySelector('.hi');
const low = document.querySelector('.low');
const units = document.querySelectorAll('.unit');

function dateBuilder(d) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

export function populateContent(data) {
  const now = new Date();
  city.innerText = `${data.name}, ${data.sys.country}`;
  date.innerText = dateBuilder(now);
  temp.innerText = `${Math.round(data.main.temp)}`;
  weather.innerText = data.weather[0].description;
  hi.innerText = `${Math.round(data.main.temp_max)}`;
  low.innerText = `${Math.round(data.main.temp_min)}`;
}


export function updateTempUnit(unite) {
  if (unite.innerHTML === '°C') {
    units.forEach(unit => { unit.innerText = '°F' });
  } else if (unite.innerHTML === '°F') {
    units.forEach(unit => { unit.innerText = '°C' });
  }
}
