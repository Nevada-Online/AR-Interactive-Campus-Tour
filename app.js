import './css/index.css'

import {tapPlaceCursorComponent} from './components/tap-place-cursor.js'
import {tapHotspotComponent} from './components/tap-hotspot.js'
import {tapCloseComponent} from './components/tap-close.js'

window.lastSelectedHotspot = null

window.hideAll = () => {
  document.getElementById('container').classList.add('collapsed')
  const hotspotChildren = document.querySelectorAll('a-text')
  hotspotChildren.forEach(element => element.setAttribute('visible', false))

  // Reset the color of last selected hotspot
  if (window.lastSelectedHotspot) {
    console.log(`Resetting color for last selected hotspot: ${window.lastSelectedHotspot.getAttribute('id')}`)
    window.lastSelectedHotspot.setAttribute('material', 'color: rgb(255, 5, 44)')
    window.lastSelectedHotspot = null  // Clear selection
  } else {
    console.log('No hotspot selected to reset')
  }
}

// Function to toggle visibility of categories
function selectCategory(category) {

  // hide all categories
  document.getElementById('ActivitiesAndLandmarks').setAttribute('visible', 'false')
  document.getElementById('StudentServices').setAttribute('visible', 'false')
  document.getElementById('Schools').setAttribute('visible', 'false')
  document.getElementById('Libraries').setAttribute('visible', 'false')

  // Show the selected category
  const selectedCategory = document.getElementById(category)
  selectedCategory.setAttribute('visible', 'true')

  const hotspots = selectedCategory.querySelectorAll('[tap-hotspot]')
  hotspots.forEach((hotspot) => {
    hotspot.emit('fadeIn')  // Trigger the fadeIn event
  })

  // remove the selected class from all buttons
  document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('selected'))

  // add selected class to the corresponding button
  document.getElementById(`${category}Btn`).classList.add('selected')
}

// Initialize by selecting 'ActivitiesAndLandmarks'
window.addEventListener('DOMContentLoaded', (event) => {
  selectCategory('ActivitiesAndLandmarks')
})

window.selectCategory = selectCategory

AFRAME.registerComponent('tap-place-cursor', tapPlaceCursorComponent)
AFRAME.registerComponent('tap-hotspot', tapHotspotComponent)
AFRAME.registerComponent('tap-close', tapCloseComponent)
