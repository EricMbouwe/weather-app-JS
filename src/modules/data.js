export const getAllData = async(input) => {
  const key = '1c3e320d963d88f4616259a84c7026e9'
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${key}`)
  const data = await res.json()
  console.log(data);
  return data
}

