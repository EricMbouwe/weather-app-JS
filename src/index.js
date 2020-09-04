import './main.scss'
import { getAllData, convertTemp } from './modules/data'
import { updateTempUnit, populateContent } from './modules/dom'

const searchbox = document.querySelector('.search-field');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
  if (evt.keyCode == 13) {
    getAllData(searchbox.value)
      .then(data => {
        populateContent(data)
      })
  }
}


const unit = document.querySelector('.unit')
unit.addEventListener('click', () => {
  convertTemp(donnees)
  updateTempUnit()
})