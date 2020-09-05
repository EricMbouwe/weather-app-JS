let city = document.querySelector('.location .city');
let date = document.querySelector('.location .date');
let temp = document.querySelector('.current .temp');
let weather = document.querySelector('.current .weather');
let hilow = document.querySelector('.hi-low');
let icon = document.querySelector('icon')


export function populateContent(data) {
  let now = new Date();
  city.innerText = `${data.name}, ${data.sys.country}`;
  date.innerText = dateBuilder(now)
  temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`;
  weather.innerText = data.weather[0].main;
  // icon.src = `${../assets/data.weather[0].icon}`.png ;
  hilow.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;
}

export function updateTempUnit() {
  console.log('clicked updatedom');
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