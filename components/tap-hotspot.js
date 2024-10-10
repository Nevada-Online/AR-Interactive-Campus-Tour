const tapHotspotComponent = {
  init() {
    const id = this.el.getAttribute('id')
    const contents = document.getElementById('contents')
    const container = document.getElementById('container')
    const childElement = document.getElementById(`${id}-child`)

    // ADD DESCRIPTIONS OF ALL BUILDINGS HERE. THE KEY NEEDS TO MATCH THE ID IN BODY.HTML
    const hotspotDescriptions = {
      MIKC: 'Looking for help with research or just a comfortable place to study? Completed in 2008, the Mathewson-IGT Knowledge Center features the technology, spaces, and services you need. Computing and information technologies and support are combined with the latest in multimedia tools and the resources of the University library in a physical environment designed for comfort, efficiency and collaboration.',
      JCSU: 'Named in honor of University President Joe Crowley, whose 23-year tenure as the institution\'s chief executive is a record, the Joe Crowley Student Union (JCSU) is a 167,000 square-foot. The Joe features a two-story bookstore (Nevada WolfShop), a variety of food and drink retailers, a 1,200-seat grand ballroom, a 220-seat, two-level movie theater, a 2,000-square-foot student organization center, and more.',
      LEC: 'Opened in 1983, Lawlor Events Center, is the largest arena in northern Nevada. It\'s the home of Nevada Men\'s and Women\'s basketball and hosts a variety of concerts and events. Named after Nevada\'s legendary coach and athletic director, Glenn "Jake" Lawlor, the Events Center was made possible by a grant approved by the Nevada State Legislature in 1979, with the grand opening held on Nov. 4, 1983.',
      WFC: 'Opened in February of 2017, the E. L. Wiegand Fitness Center kicked off a new era of campus health and wellness.<p>In addition to the myriad machines, collections of weights and other exercise equipment, the state-of-the-art center boasts some of the largest windows of any building on campus and a "fitness stairway," a series of deep and somewhat steep stairs leading from the first floor entry all the way to the fourth floor, where a 1/8th mile running track awaits.</p><p>The building also features five multi-purpose rooms for fitness classes such as yoga, Pilates, aerobics and Zumba; a gymnasium with three multi-use courts; a cardio zone with exercise machines such as stationary bikes and treadmills; and much, much more.</p>',
      MackayStadium: 'Since the early 1900s, Nevada football teams have played in facilities named after university benefactor Clarence Mackay. Until the mid-1960s, Mackay Stadium was a small field located in the bowl that currently houses the Reynolds School of Journalism.<p>The modern Mackay Stadium was completed in 1965 with an initial seating capacity of 7,500. The facility has been expanded several times in the last 15 years and now seats 30,000.</p>',
      SalaIntramural: 'Fully lighted and covered with the most advanced artificial turf, the Sala Fields offer students an unparalleled recreational facility.<p>The field is open every day during the fall and spring semesters from noon to 6 p.m.</p><p>Summer field use is by reservation only.</p><p>Please call (775) 682-7038 to reserve.</p><p>The fields will be closed during holidays and all home football games.</p>',
      RSJ: '',
      Quad: '',
      MH: '',
      PSAC: '',
      FP: '',
      ManzanitaLake: '',
      CFA: '',
      AB: '',
      WPEB: '',
      EPP: '',
      MM: '',
      WRB: '',
    }

    const handleClickEvent = (e) => {
      hideAll()
      container.classList.remove('collapsed')
      childElement.setAttribute('visible', true)
      childElement.setAttribute('class', 'cantap')

      const title = childElement.getAttribute('value')
      const description = hotspotDescriptions[id] || 'No additional information available.'
      contents.innerHTML = `<h1>${title}</h1><p>${description}</p>`

      // Dynamic plane resizing based on text length
      const textLength = title.length
      const planeWidth = Math.max(1.6, textLength * 0.12)  // Adjust multiplier as needed

      // Update the width of the plane dynamically
      childElement.setAttribute('geometry', `primitive: plane; width: ${planeWidth}; height: 0.4`)

      // Change the color of the currently selected hotspot
      this.el.setAttribute('material', 'color: rgb(5, 44, 255)')  // Change to green or any other color

      // Set the current hotspot as the last selected hotspot
      window.lastSelectedHotspot = this.el

      console.log(`New selected hotspot: ${window.lastSelectedHotspot.getAttribute('id')}`)
      
      // Add the event listener to close the information container when clicked outside
      // Add a slight delay before attaching the click event to avoid interference
      setTimeout(() => {
        const handleOutsideClick = (event) => {
          if (!container.contains(event.target) && !this.el.contains(event.target)) {
            hideAll()
            window.removeEventListener('click', handleOutsideClick)  // Remove listener after closing
          }
        }
        // Attach the click event to the window
        window.addEventListener('click', handleOutsideClick)
      }, 100)  // 100ms delay to ensure the initial hotspot click completes first
    }

    this.el.addEventListener('click', handleClickEvent, true)
  },
}

export {tapHotspotComponent}
