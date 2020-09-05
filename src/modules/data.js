const key = '1c3e320d963d88f4616259a84c7026e9'
const unit = document.querySelector('.unit')


export const getAllData = async (input, units = 'metric') => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${units}&APPID=${key}`)
  const data = await res.json()
  return data
}

export const toggleTemp = async (input) => {
  let units
  if (unit.innerText === '°C') {
    units = 'metrics'
  }
  else if (unit.innerText === '°F') {
    units = 'imperial'
  }

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=${units}&APPID=${key}`)
  const data = await res.json()
  return data
}



export async function getCurrent(lat, lon, units = 'metric') {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;
    const res = await fetch(url, { mode: 'cors' });
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
}
