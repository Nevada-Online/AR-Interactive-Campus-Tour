import './css/index.css'

import {tapPlaceCursorComponent} from './components/tap-place-cursor.js'
import {tapHotspotComponent} from './components/tap-hotspot.js'
import {tapCloseComponent} from './components/tap-close.js'
import {PromptFlowControlComponent} from './components/prompt-flow.js'
import {categoryMenuComponent} from './components/category-menu.js'
import {recenterButtonComponent} from './components/recenter.js'
import {DeviceTiltCheckComponent} from './components/device-tilt-check'

window.lastSelectedHotspot = null

window.hideAll = () => {
  document.getElementById('container').classList.add('collapsed')
  const hotspotChildren = document.querySelectorAll('a-text')
  hotspotChildren.forEach(element => element.setAttribute('visible', false))

  document.querySelector('a-scene').emit('showPrompt3')

  // Reset the color of the last selected hotspot
  if (window.lastSelectedHotspot) {
    console.log(
      `Resetting color for last selected hotspot: ${window.lastSelectedHotspot.getAttribute('id')}`
    )
    window.lastSelectedHotspot.setAttribute('material', 'color: rgb(255, 5, 44)')
    window.lastSelectedHotspot = null  // Clear selection
  } else {
    console.log('No hotspot selected to reset')
  }
}

// Register components
AFRAME.registerComponent('recenter-button', recenterButtonComponent)
AFRAME.registerComponent('tap-place-cursor', tapPlaceCursorComponent)
AFRAME.registerComponent('prompt-flow', PromptFlowControlComponent)
AFRAME.registerComponent('tap-hotspot', tapHotspotComponent)
AFRAME.registerComponent('tap-close', tapCloseComponent)
AFRAME.registerComponent('category-menu', categoryMenuComponent)
AFRAME.registerComponent('device-tilt-check', DeviceTiltCheckComponent)
