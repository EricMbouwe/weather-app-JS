import './main.scss'
import { getAllData, convertTemp } from './modules/data'
import { updateTempUnit, populateContent } from './modules/dom'


getAllData('douala')
  .then(data => {
    populateContent(data)
  })


const unit = document.getElementById('tempUnit')
unit.addEventListener('click', () => {
  convertTemp(donnees)
  updateTempUnit()
})