export const getAllData = async(input) => {
  const key = '1c3e320d963d88f4616259a84c7026e9'
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=${key}`)
  const data = await res.json()
  return data
}

export function convertTemp(data) {
  console.log('clicked convert');
}

export async function getCurrent(lat, lon, units = 'metric') {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b56e54fcfc83ea96697925d8521b8966&units=${units}`;
    const res = await fetch(url, { mode: 'cors' });
    const data = await res.json();
    return data
  } catch (err) {
    console.log(error);
  }
}
