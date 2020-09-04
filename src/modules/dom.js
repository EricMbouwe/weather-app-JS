const tempe = document.getElementById('temperature')


export function populateContent(data) {
  tempe.innerHTML = data.main.temp
  console.log(data.main.temp);
  console.log(data);
}

export function updateTempUnit() {
  console.log('clicked updatedom');
}
