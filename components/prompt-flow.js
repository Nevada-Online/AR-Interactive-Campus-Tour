const PromptFlowControlComponent = {
  init() {
    this.promptBox = document.getElementById('promptBox')
    this.promptText = document.getElementById('promptText')

    // Store bound versions of event handlers
    this.showPrompt1Handler = this.showPrompt1.bind(this)
    this.dismissPrompt1Handler = this.dismissPrompt1.bind(this)
    this.showPrompt2Handler = this.showPrompt2.bind(this)
    this.dismissPrompt2Handler = this.dismissPrompt2.bind(this)
    this.showPrompt3Handler = this.showPrompt3.bind(this)
    this.dismissPrompt3Handler = this.dismissPrompt3.bind(this)

    // Register event listeners for each prompt
    this.el.sceneEl.addEventListener('showPrompt1', this.showPrompt1Handler)
    this.el.sceneEl.addEventListener('dismissPrompt1', this.dismissPrompt1Handler)

    this.el.sceneEl.emit('showPrompt1')
  },

  showPrompt1() {
    this.setPromptText(`<p>Welcome to University of Nevada, Reno's interactive campus tour!</p>
                        <ol><li>Point the camera around to align the box on a flat surface within your surroundings</li>
                        <li>Then tap your screen to place the Campus Map</li></ol>`)
    this.addFadeIn()
    this.el.sceneEl.removeEventListener('showPrompt1', this.showPrompt1Handler)
  },

  dismissPrompt1() {
    this.el.sceneEl.addEventListener('showPrompt2', this.showPrompt2Handler)
    this.el.sceneEl.addEventListener('dismissPrompt2', this.dismissPrompt2Handler)
    this.addFadeOut(() => {
      this.el.sceneEl.emit('showPrompt2')  // Trigger the second prompt after the first is dismissed
    })
    this.el.sceneEl.removeEventListener('dismissPrompt1', this.dismissPrompt1Handler)
  },

  showPrompt2() {
    this.setPromptText(`<ol start="3"><li>Point your camera towards the campus and move around the map.</li>
                        <li>Pinch to make it larger or rotate it</li>
                        <li>Get close to any bright green hotspot, and tap it for more information!</li></ol>`)
    this.addFadeIn()
    this.el.sceneEl.removeEventListener('showPrompt2', this.showPrompt2Handler)
  },

  dismissPrompt2() {
    this.el.sceneEl.addEventListener('showPrompt3', this.showPrompt3Handler)
    this.el.sceneEl.addEventListener('dismissPrompt3', this.dismissPrompt3Handler)
    this.addFadeOut()
    this.el.sceneEl.removeEventListener('dismissPrompt2', this.dismissPrompt2Handler)
  },

  showPrompt3() {
    console.log('Entering showPrompt3')
    this.addFadeIn()
    this.setPromptText(`<ol start="6"><li>Tap the different categories in the menu on the top right corner
                        and watch the hotspots update.</li></ol>`)
    document.getElementById('arrow-container').style.display = 'block'
    this.el.sceneEl.removeEventListener('showPrompt3', this.showPrompt3Handler)
  },

  dismissPrompt3() {
    this.addFadeOut()
    document.getElementById('arrow-container').style.display = 'none'
    this.el.sceneEl.removeEventListener('dismissPrompt3', this.dismissPrompt3Handler)
  },

  setPromptText(message) {
    this.promptText.innerHTML = message
  },

  addFadeIn() {
    this.promptBox.style.display = 'block'
    this.promptBox.classList.remove('fade-out')
    this.promptBox.classList.add('fade-in')
  },

  addFadeOut(callback) {
    this.promptBox.classList.remove('fade-in')
    this.promptBox.classList.add('fade-out')
    setTimeout(() => {
      this.promptBox.style.display = 'none'
      if (callback) callback()  // Trigger callback after fade-out
    }, 1000)  // Matches the fade-out animation duration
  },
}

export {PromptFlowControlComponent}
