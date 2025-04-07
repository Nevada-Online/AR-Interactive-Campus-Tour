const categoryMenuComponent = {
  schema: {
    defaultCategory: {type: 'string', default: 'Schools'},
  },

  init() {
    this.sceneEl = this.el.sceneEl

    // Define the categories and their corresponding buttons
    this.categories = [
      'ActivitiesAndLandmarks',
      'StudentServices',
      'Schools',
    ]

    this.menuButtons = this.categories.map(category => document.getElementById(`${category}Btn`))

    // Bind the category selection function
    this.selectCategory = this.selectCategory.bind(this)

    // Attach click event listeners to buttons
    this.menuButtons.forEach((button, index) => {
      button.addEventListener('click', () => this.selectCategory(this.categories[index], true))  // Mark as user interaction
    })

    // Select the default category on initialization (no user interaction)
    this.selectCategory(this.data.defaultCategory, false)
  },

  /**
   * Selects a category and optionally emits the `dismissPrompt3` event.
   * @param {string} category - The category to select.
   * @param {boolean} isUserInteraction - Whether this was triggered by user interaction.
   */
  selectCategory(category, isUserInteraction) {
    // Hide all category entities
    this.categories.forEach((cat) => {
      const categoryEntity = document.getElementById(cat)
      if (categoryEntity) {
        categoryEntity.setAttribute('visible', 'false')
      }
    })

    // Show the selected category
    const selectedCategory = document.getElementById(category)
    if (selectedCategory) {
      selectedCategory.setAttribute('visible', 'true')

      // Trigger fade-in animations for hotspots
      const hotspots = selectedCategory.querySelectorAll('[tap-hotspot]')
      hotspots.forEach((hotspot) => {
        hotspot.emit('fadeIn')
      })
    }

    // Update button styles
    this.menuButtons.forEach(btn => btn.classList.remove('selected'))
    const selectedButton = document.getElementById(`${category}Btn`)
    if (selectedButton) {
      selectedButton.classList.add('selected')
    }

    // Emit the `dismissPrompt3` event only if it's a user interaction
    if (isUserInteraction) {
      this.el.sceneEl.emit('dismissPrompt3')
    }
  },
}

export {categoryMenuComponent}
