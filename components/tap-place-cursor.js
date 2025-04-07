// Component that places trees at cursor location when screen is tapped
const tapPlaceCursorComponent = {
  init() {
    // const {sceneEl} = this.el
    this.scene = this.el.sceneEl
    this.raycaster = new THREE.Raycaster()
    this.camera = document.getElementById('camera')
    this.threeCamera = this.camera.getObject3D('camera')
    this.ground = document.getElementById('ground')
    this.cursor = document.getElementById('cursor')
    this.model = document.getElementById('model')
    // this.prompt = document.getElementById('promptText')

    let hasPlacedModel = false

    // 2D coordinates of the raycast origin, in normalized device coordinates (NDC)---X and Y
    // components should be between -1 and 1.  Here we want the cursor in the center of the screen.
    this.rayOrigin = new THREE.Vector2(0, 0)
    this.cursorLocation = new THREE.Vector3(0, 0, 0)

    this.el.sceneEl.addEventListener('click', (event) => {
      if (hasPlacedModel !== true) {
        hasPlacedModel = true

        this.scene.emit('dismissPrompt1')

        this.model.setAttribute('position', this.el.object3D.position)
        this.model.setAttribute('visible', 'true')

        // Remove ghosted model from scene after model is placed
        this.cursor.parentNode.removeChild(this.cursor)

        // Show and fade-in the category menu
        const categoryMenu = document.getElementById('category-menu')
        categoryMenu.style.opacity = '1'  // Fade in the menu
        categoryMenu.style.pointerEvents = 'auto'  // Enable interaction

        // Select "Activities & Landmarks" category by default
        // window.selectCategory('ActivitiesAndLandmarks')

        // Add raycaster to camera
        this.camera.setAttribute('raycaster', 'objects: .cantap')
      }
    })
  },
  tick() {
    // Raycast from camera to 'ground'
    this.raycaster.setFromCamera(this.rayOrigin, this.threeCamera)
    const intersects = this.raycaster.intersectObject(this.ground.object3D, true)

    if (intersects.length > 0) {
      const [intersect] = intersects
      this.cursorLocation = intersect.point
    }
    this.el.object3D.position.y = 0.1
    this.el.object3D.position.lerp(this.cursorLocation, 0.4)
    this.el.object3D.rotation.y = this.threeCamera.rotation.y
  },
}

export {tapPlaceCursorComponent}
