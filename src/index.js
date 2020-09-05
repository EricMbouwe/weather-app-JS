import './main.scss'
import { getAllData, toggleTemp, getCurrentLocationTemp } from './modules/data'
import { updateTempUnit, populateContent } from './modules/dom'


(() => {
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getCurrentLocationTemp(lat, lon)
      .then(data => {
        populateContent(data)
      })
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
})()


const searchbox = document.querySelector('.search-field');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13 && searchbox.value !== '') {
    getAllData(searchbox.value)
      .then(data => {
        populateContent(data)
      })
  }
}

const searchButton = document.querySelector('.search-btn')

searchButton.addEventListener('click', () => {
  getAllData(searchbox.value)
    .then(data => {
      populateContent(data)
    })
})


let unit = document.getElementById('unit')
const city = document.querySelector('.location .city');

unit.addEventListener('click', () => {
  toggleTemp(city.innerHTML, unit)
  .then(data => {
    populateContent(data)
    updateTempUnit(unit)
  })
})