const DeviceTiltCheckComponent = {
  init() {
    this.tiltCheckBox = document.getElementById('tiltCheckBox')
    this.tiltCheckText = document.getElementById('tiltCheckText')
    this.isWarningVisible = false

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.checkTilt.bind(this))
    }
  },

  async checkTilt(event) {
    const {beta} = event

    if (beta < 30.0 && !this.isWarningVisible) {
      this.addFadeIn()
      this.isWarningVisible = true
      console.log('Keep your phone at a 45 degree angle!')
    } else if (beta > 34.0 && this.isWarningVisible) {
      this.addFadeOut()
      this.isWarningVisible = false
    }
  },

  addFadeIn() {
    this.tiltCheckBox.style.display = 'block'
    this.tiltCheckBox.classList.remove('fade-out')
    this.tiltCheckBox.classList.add('fade-in')
  },

  addFadeOut(callback) {
    this.tiltCheckBox.classList.remove('fade-in')
    this.tiltCheckBox.classList.add('fade-out')
    setTimeout(() => {
      this.tiltCheckBox.style.display = 'none'
      if (callback) callback()  // Trigger callback after fade-out
    }, 1000)  // Matches the fade-out animation duration
  },

}

export {DeviceTiltCheckComponent}
