let city = document.querySelector('.location .city');
let date = document.querySelector('.location .date');
let temp = document.querySelector('.current .temp');
let weather = document.querySelector('.current .weather');
let hi = document.querySelector('.hi');
let low = document.querySelector('.low');
let units = document.querySelectorAll('.unit')


export function populateContent(data) {
  let now = new Date();
  city.innerText = `${data.name}, ${data.sys.country}`;
  date.innerText = dateBuilder(now)
  temp.innerText = `${Math.round(data.main.temp)}`;
  weather.innerText = data.weather[0].description;
  hi.innerText = `${Math.round(data.main.temp_max)}`;
  low.innerText = `${Math.round(data.main.temp_min)}`;
}


export function updateTempUnit(unite) {
  if (unite.innerHTML === '°C') {
    units.forEach(unit => unit.innerText = '°F')
  }
  else if (unite.innerHTML === '°F') {
    units.forEach(unit => unit.innerText = '°C')
  }
}

function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear()

  return `${day} ${date} ${month} ${year}`;
}

// var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();