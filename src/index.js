import './main.scss'
import { getAllData, convertTemp, getCurrent } from './modules/data'
import { updateTempUnit, populateContent } from './modules/dom'

const searchbox = document.querySelector('.search-field');
searchbox.addEventListener('keypress', setQuery);

const searchButton = document.querySelector('.search-btn')
searchButton.addEventListener('click', () => {
  getAllData(searchbox.value)
    .then(data => {
      populateContent(data)
    })
})


function setQuery(evt) {
  if (evt.keyCode == 13 && searchbox.value !== '') {
    getAllData(searchbox.value)
      .then(data => {
        populateContent(data)
      })
  }
}

(() => {
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getCurrent(lat, lon)
      .then(data => {
        populateContent(data)
      })
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  }
})()


const unit = document.querySelector('.unit')

