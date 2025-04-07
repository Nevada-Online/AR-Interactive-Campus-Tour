const tapHotspotComponent = {
  init() {
    const id = this.el.getAttribute('id')
    const contents = document.getElementById('contents')
    const container = document.getElementById('container')
    const childElement = document.getElementById(`${id}-child`)

    const hotspotDescriptions = {
      MIKC: [
        {type: 'text', content: 'Home of Nevada Online! No matter what online course you take, they are all developed in the Knowledge Center by our hardworking Instructional Designers and Technologists.'},
        {type: 'image', content: require('../assets/images/MIKC_1.jpg')},
        {type: 'text', content: 'Looking for help with research or just a comfortable place to study? Completed in 2008, the Mathewson-IGT Knowledge Center features the technology, spaces, and services you need. Computing and information technologies and support are combined with the latest in multimedia tools and the resources of the University library in a physical environment designed for comfort, efficiency and collaboration.'},
        {type: 'image', content: require('../assets/images/MIKC_2.jpg')},
      ],
      JCSU: [
        {type: 'text', content: 'Named in honor of University President Joe Crowley, whose 23-year tenure as the institution\'s chief executive is a record.'},
        {type: 'image', content: require('../assets/images/JCSU_1.jpg')},
        {type: 'text', content: 'The Joe Crowley Student Union (JCSU) is a 167,000-square-foot building. The Joe features a two-story bookstore (Nevada WolfShop), a variety of food and drink retailers, a 1,200-seat grand ballroom, a 220-seat, two-level movie theater, a 2,000-square-foot student organization center, and more.'},
        {type: 'image', content: require('../assets/images/JCSU_2.jpg')},
      ],
      LEC: [
        {type: 'text', content: 'Opened in 1983, Lawlor Events Center, is the largest arena in northern Nevada.'},
        {type: 'image', content: require('../assets/images/LEC_1.jpg')},
        {type: 'text', content: 'It\'s the home of Nevada Men\'s and Women\'s basketball and hosts a variety of concerts and events. Named after Nevada\'s legendary coach and athletic director, Glenn "Jake" Lawlor, the Events Center was made possible by a grant approved by the Nevada State Legislature in 1979, with the grand opening held on Nov. 4, 1983.'},
        {type: 'image', content: require('../assets/images/LEC_2.jpg')},
      ],
      WFC: [
        {type: 'text', content: 'Opened in February of 2017, the E. L. Wiegand Fitness Center kicked off a new era of campus health and wellness.'},
        {type: 'image', content: require('../assets/images/WFC_1.jpg')},
        {type: 'text', content: 'In addition to the myriad machines, collections of weights, and other exercise equipment, the state-of-the-art center boasts some of the largest windows of any building on campus and a "fitness stairway," a series of deep and somewhat steep stairs leading from the first floor entry all the way to the fourth floor, where a 1/8th mile running track awaits.'},
        {type: 'text', content: 'The building also features five multi-purpose rooms for fitness classes such as yoga, Pilates, aerobics and Zumba; a gymnasium with three multi-use courts; a cardio zone with exercise machines such as stationary bikes and treadmills; and much, much more.'},
      ],
      MackayStadium: [
        {type: 'text', content: 'Since the early 1900s, Nevada football teams have played in facilities named after university benefactor Clarence Mackay.'},
        {type: 'text', content: 'Until the mid-1960s, Mackay Stadium was a small field located in the bowl that currently houses the Reynolds School of Journalism.'},
        {type: 'image', content: require('../assets/images/MackayStadium_1.jpg')},
        {type: 'text', content: 'The modern Mackay Stadium was completed in 1965 with an initial seating capacity of 7,500. The facility has been expanded several times in the last 15 years and now seats 30,000.'},
      ],
      SalaIntramural: [
        {type: 'text', content: 'Fully lighted and covered with the most advanced artificial turf, the Sala Fields offer students an unparalleled recreational facility.'},
        {type: 'image', content: require('../assets/images/SalaIntramural_1.jpg')},
        {type: 'text', content: 'The field is open every day during the fall and spring semesters from noon to 6 p.m.'},
        {type: 'text', content: 'Summer field use is by reservation only. Please call (775) 682-7038 to reserve. The fields will be closed during holidays and all home football games.'},
      ],
      RSJ: [
        {type: 'text', content: 'Built in 1992, the building was named for Donald W. Reynolds, journalist and businessman, whose interest and contributions helped transform the university\'s journalism program from a department to a school.'},
        {type: 'image', content: require('../assets/images/RSJ_1.jpg')},
        {type: 'text', content: 'With its distinctive atrium, it is home to a faculty that has helped produce six Pulitzer Prize-winning journalists. The Travis Linn Reading Room, named in honor of the late Reynolds School dean Travis Linn and located on the first floor of the building, plays host to the school’s annual “Lighting of the Hearth” event each fall semester, where students, faculty, alumni and friends gather to celebrate the accomplishments of the past year.'},
        {type: 'image', content: require('../assets/images/RSJ_2.jpg')},
        {type: 'text', content: 'The building also houses the Rollan Melton Conference Room and the Clarence & Martha Jones Network Center.'},
      ],
      Quad: [
        {type: 'text', content: 'The heart of the campus, this beautiful area is the traditional setting for Commencement activities and provides a pleasant place for picnics, concerts, and quiet reflection.'},
        {type: 'image', content: require('../assets/images/Quad_1.jpg')},
        {type: 'text', content: 'Since 1987, the University of Nevada, Reno Quadrangle has been listed as a "Jeffersonian Academic Village" on the National Register of Historic Places.'},
        {type: 'image', content: require('../assets/images/Quad_2.jpg')},
      ],
      MH: [
        {type: 'text', content: 'Morrill Hall was the first building constructed on campus when the University was moved from Elko to Reno in 1885.'},
        {type: 'image', content: require('../assets/images/MH_1.jpg')},
        {type: 'text', content: 'Designed by Reno architect M.J. Curtis, and built at the then-astronomical sum of $13,500, Morrill Hall originally housed the entire University, including offices, classrooms, living quarters, a museum and the library.'},
        {type: 'text', content: 'Morrill Hall was extensively remodeled in the 1970s and placed on the National Register of Historic Places in 1974. Today it is home to University Advancement.'},
      ],
      PSAC: [
        {type: 'text', content: 'The William N. Pennington Student Achievement Center brings together vital student centers formerly scattered throughout the campus under one roof.'},
        {type: 'image', content: require('../assets/images/PSAC_1.jpg')},
        {type: 'text', content: 'This 78,000 square foot facility contains the Writing Center, Math Center, Tutoring Center, Nevada Career Studio, Advising Center, Student Veterans Affairs, Disabilities Resource Center, Counseling Services, Trio & McNair Scholars, and Reflection and Mediation Rooms.'},
        {type: 'image', content: require('../assets/images/PSAC_2.jpg')},
        {type: 'text', content: 'In addition to these student resource centers, there are an assortment of student collaboration rooms several computer labs on different floors.'},
        {type: 'text', content: 'There is also an on-site restaurant on the second floor that provides an assortment of sandwiches and salads, as well as local Hub Coffee.'},
        {type: 'image', content: require('../assets/images/PSAC_3.jpg')},
      ],
      FP: [
        {type: 'text', content: 'Located in the northwestern portion of campus on a hill above Lawlor Events Center, the Fleischmann Planetarium and Science Center opened in 1964.'},
        {type: 'image', content: require('../assets/images/FP_1.jpg')},
        {type: 'text', content: 'The Planetarium\'s unique shape, called a "hyperbolic paraboloid," was designed by famed Reno architect Ray Hellman and is now listed on the National Historic Register of Historic Buildings.'},
        {type: 'image', content: require('../assets/images/FP_2.jpg')},
        {type: 'text', content: 'The 13,000-square-foot facility includes large-screen star shows and feature films, as well as stargazing events and a gift shop, and attracts some 44,000 visitors and 15,000 schoolchildren annually.'},
      ],
      ManzanitaLake: [
        {type: 'text', content: 'Manzanita Lake was formed when Orr Irrigation Ditch (south of the lake) was dammed on Nov. 25, 1911. Today, swans, ducks, and even some turtles like to call it home. Manzanita Bowl, to the south of Orr Ditch, is a land-fill that was brought in for the dam.'},
        {type: 'image', content: require('../assets/images/ManzanitaLake_1.jpg')},
        {type: 'text', content: 'Students have many activities, like karaoke, volleyball and Duck Day in Manzanita Bowl whenever the weather permits. The walkway separating the bowl and the lake was originally a carved wooden structure which was converted to a concrete walkway in 1937.'},
        {type: 'image', content: require('../assets/images/ManzanitaLake_2.jpg')},
      ],
      CFA: [
        {type: 'text', content: 'The Church Fine Arts building, opened in 1962, houses the Department of Art, Art History and Design and the Department of Theatre & Dance.'},
        {type: 'image', content: require('../assets/images/CFA_1.jpg')},
        {type: 'text', content: 'It is home to the Redfield Proscenium Theatre, Redfield Studio Theatre and Nightingale Concert Hall.'},
        {type: 'image', content: require('../assets/images/CFA_2.jpg')},
        {type: 'text', content: 'James Edward Church was professor of Latin, German, classical art and history at the University of Nevada, Reno from 1892-1959. Church\'s development of the first snow surveying techniques and a system of analyzing avalanche hazards brought recognition to the school and the state.'},
        {type: 'text', content: 'Each spring, Church Fine Arts plays host to one of the University\'s most successful outreach efforts, the Reno Jazz Festival, attracting thousands of participants from high schools and universities from throughout the region.'},
        {type: 'text', content: 'The building and the University Arts Building also are the locations for the more than 100 performances, exhibitions and events presented by the School of the Arts each year.'},
      ],
      AB: [
        {type: 'text', content: 'The Ansari Business Building, completed in 1982, provides 30,460 square feet for The College of Business. In addition to the College of Business, it also houses the Nevada Small Business Development Center, the Bureau of Business and Economic Research, the College of Liberal Arts, the Department of Communication Studies, the Department of Anthropology, the Anthropology Research Museum and a number of additional academic units.'},
        {type: 'image', content: require('../assets/images/AB_1.jpg')},
        {type: 'text', content: 'The building is named in honor of Nazir Ansari, professor of managerial sciences from 1967 to 1994.'},
      ],
      WPEB: [
        {type: 'text', content: 'With dedicated space for all five departments of the College of Engineering, the 100,000-square-foot William N. Pennington Engineering Building includes more than 40 laboratories, a large computer lab, a 200-student classroom, 150 graduate work stations and a Class 100 cleanroom.'},
        {type: 'image', content: require('../assets/images/WPEB_1.jpg')},
        {type: 'text', content: 'It facilitates research in materials science and engineering, chemical, biomedical, and mechanical engineering. The building is also home to the College of Engineering dean\'s office.'},
      ],
      WRB: [
        {type: 'text', content: 'This 118,000-square-foot building opened for classes in fall 1997. It houses the College of Education & Human Development.'},
        {type: 'image', content: require('../assets/images/WRB_1.jpg')},
        {type: 'text', content: 'Named in honor of Nevada State Senator William J. Raggio, a Reno native, Nevada graduate and longtime K-12 and higher education advocate in the state of Nevada.'},
      ],
      FSSB: [
        {type: 'text', content: 'This three-story, 51,000-square-foot building provides students, staff and faculty with a focal point for student-related business.'},
        {type: 'image', content: require('../assets/images/FSSB_1.jpg')},
        {type: 'text', content: 'First-floor offices and amenities:<ul><li>Office for Prospective Students</li><li>Office of International Students and Scholars</li><li>University Police Department - Northern Command</li><li>Student lounge</li><li>Panera Bread</li></ul></p><p>Second-floor offices:<ul><li>Office of Admissions and Records</li><li>The Graduate School</li></ul></p><p>Third-floor offices:<ul><li>Office of Financial Aid & Scholarships</li><li>Cashier\'s Office</li></ul>'},
      ],
      LME: [
        {type: 'text', content: 'This $11 million building, completed in 1983, was a giant step forward for the University and the School of Mines. The 60,000-square-foot building, styled to conform with the historic buildings around it, houses classrooms and laboratories for mining engineering, chemical and materials engineering, and geological sciences.'},
        {type: 'image', content: require('../assets/images/LME_1.jpg')},
        {type: 'text', content: 'It also includes the Nevada Seismology Laboratory, the Keck Mine Ventilation Lab, the Newmont Rock Mechanics Lab and a supercomputer laboratory.'},
      ],
      EMM: [
        {type: 'text', content: 'Built in 1967 and named after Effie Mona Mack (1888-1969), Nevada historian and educator, and University benefactor, it houses several academic departments, including the Department of Psychology, Psychological Services, and the Interdisciplinary Social Psychology Ph.D. Program.'},
        {type: 'image', content: require('../assets/images/EMM_1.jpg')},
      ],
      LRC: [
        {type: 'text', content: 'Completed in 1974, this recreation facility was named after Dr. Louis Lombardi, who was an athletic physician for Nevada, a former member of the Board of Regents, and a graduate of the University of Nevada, Reno.'},
        {type: 'image', content: require('../assets/images/LRC_1.jpg')},
        {type: 'text', content: 'It is home to the Ramon Sessions Performance Center, Nevada Swimming & Diving teams, has a full-sized pool, and more.'},
      ],
      NJC: [
        {type: 'text', content: 'The National Judicial College is located on upper campus, just north of the Education Building and south of the Applied Research Facility.'},
        {type: 'image', content: require('../assets/images/NJC_1.jpg')},
        {type: 'text', content: 'Affiliated with the American Bar Association, the college houses a law library, classrooms, and administrative offices.'},
        {type: 'text', content: 'The building was expanded in 1999 to accommodate the Donald Reynolds National Center for the Courts and the Media. The building also houses the administrative offices for Nevada Cooperative Extension.'},
      ],
      PHS: [
        {type: 'text', content: 'The 59,000-square-foot William N. Pennington Health Sciences Building opened in 2011 and is located adjacent to the Pennington Medical Education Building.'},
        {type: 'image', content: require('../assets/images/PHS_1.jpg')},
        {type: 'text', content: 'The state of the art building includes classrooms, laboratories and simulated patient-care settings.'},
        {type: 'text', content: 'The William N. Pennington Health Sciences building is also home to the Orvis School of Nursing. Located on the third floor, the Orvis School of Nursing includes its faculty and nursing offices, nursing skills lab, and administrative offices.'},
      ],
      SFB: [
        {type: 'text', content: 'Constructed in 1967, the building is named for Sarah Hamilton Fleischmann, wife to food industry (Standard Brands) executive Max C. Fleischmann.'},
        {type: 'image', content: require('../assets/images/SFB_1.jpg')},
      ],
      EEL: [
        {type: 'text', content: 'The Earthquake Engineering Lab is home to our three biaxial shake tables as well as a 6-degree-of-freedom table. The building includes 29,000 square feet of laboratory, office and auditorium space. The EEL includes a 9,600 square-foot high-bay laboratory complete with tie-down strong floor, approximately $15 million worth of shake tables relocated from the Large-Scale Structures Lab, and control and instrumentation rooms.'},
        {type: 'image', content: require('../assets/images/EEL_1.jpg')},
      ],
      WPP: [
        {type: 'text', content: 'The site of University of Nevada, Reno home games since 1988, the Don Weir Field at Peccole Park has grown into one of the premier college baseball facilities on the West Coast. Originally constructed in 1988 and gradually expanded three times, Peccole Park now features a seating capacity of 3,000.'},
        {type: 'image', content: require('../assets/images/Peccole_1.jpg')},
        {type: 'text', content: 'A media-friendly press box, Wolf Pack locker facilities, restrooms, concession stands, two bullpens, and batting cages complement the on-campus facility.'},
      ],
      Hixson: [
        {type: 'text', content: 'Opened in the 2007 season, the Christina M. Hixson Softball Park, named after the benefactor whose donation allowed the University to purchase the land for the softball park, has a seating capacity of up to 1,000 fans, with room for lawn chairs on the berms behind the first and third base lines as well as in the outfield. Land for the facility was purchased from Bishop Manogue Catholic High School and is located adjacent to campus across Evans Avenue from Peccole Park. The 23-acre site is also home to field events for women\'s track and field.'},
        {type: 'image', content: require('../assets/images/Hixson_1.jpg')},
      ],
      MM: [
        {type: 'text', content: 'Opened in 1908, the Mackay Mines Building is listed on the National Register of Historic Places. Today, it is home to the Mackay School of Earth Sciences & Engineering, the DeLaMare Science and Engineering Library, the W. M. Keck Earth Science and Mineral Engineering Museum, space for faculty from the College of Science, and more.'},
        {type: 'image', content: require('../assets/images/MM_1.jpg')},
        {type: 'image', content: require('../assets/images/MM_2.jpg')},
      ],
      PS: [
        {type: 'text', content: 'If you need to visit campus frequently, you may want to purchase an annual, semester or monthly parking permit from the Parking and Transportation Services Department. If your visits to campus are less frequent, you may obtain a daily permit. Contact Parking Services at Parking_questions@unr.edu or (775) 784-4654.'},
        {type: 'image', content: require('../assets/images/PS_1.jpg')},
      ],
      MS: [
        {type: 'text', content: 'Opened in 1930, the Mackay Science building was a gift to the University from donor Clarence H. Mackay, who also provided funding for the Mackay Mines Building. This Georgian-style structure, complete with Ionic pilasters, was designed by Reno architect Frederick De Longchamps.'},
        {type: 'image', content: require('../assets/images/MS_1.jpg')},
        {type: 'text', content: 'Today, it houses the Department of Geography as well as offices for the Faculty Senate.'},
      ],
      EBB: [
        {type: 'text', content: 'The Edna S. Brigham Building is the former location of the University Health Family Medicine Clinic, now located at 745 W. Moana Lane.'},
        {type: 'image', content: require('../assets/images/EBB_1.jpg')},
        {type: 'text', content: 'To make an appointment with a UNR Med faculty physician, call (775) 982-1000 and request a University Health provider.'},
      ],
      LH: [
        {type: 'text', content: 'Built in 1896, the historic Lincoln Hall was originally a residence hall. Today, it is home to faculty members from the Departments of Sociology, Communication Studies, and History.'},
        {type: 'image', content: require('../assets/images/LH_1.jpg')},
      ],
    }

    const handleClickEvent = (e) => {
      container.classList.remove('collapsed')
      childElement.setAttribute('visible', true)
      childElement.setAttribute('class', 'cantap')

      this.el.sceneEl.emit('dismissPrompt2')

      const title = childElement.getAttribute('value')

      const sections = hotspotDescriptions[id] || [{type: 'text', content: 'No additional information available.'}]
      let contentHTML = `<h3>${title}</h3>`

      // Loop through sections to construct content
      sections.forEach((section) => {
        if (section.type === 'text') {
          contentHTML += `<p>${section.content}</p>`
        } else if (section.type === 'image') {
          // console.log(section.content)
          contentHTML += `<img src="${section.content}" alt="Hotspot Image" />`
          // contentHTML += `<img src="${require('../assets/mikc_1.jpg')}" alt="hotspot image">`
        }
      })

      // console.log(contentHTML)
      contents.innerHTML = contentHTML

      // Dynamic plane resizing based on text length
      const textLength = title.length
      const planeWidth = Math.max(1.6, textLength * 0.12)  // Adjust multiplier as needed

      // Adjust the plane dynamically
      childElement.setAttribute('geometry', `primitive: plane; width: ${planeWidth}; height: 0.4`)

      this.el.setAttribute('material', 'color: rgb(5, 44, 255)')  // Highlight selected hotspot
      window.lastSelectedHotspot = this.el

      setTimeout(() => {
        const handleOutsideClick = (event) => {
          if (!container.contains(event.target) && !this.el.contains(event.target)) {
            hideAll()
            this.el.sceneEl.emit('showPrompt3')
            window.removeEventListener('click', handleOutsideClick)
          }
        }
        window.addEventListener('click', handleOutsideClick)
      }, 100)
    }

    this.el.addEventListener('click', handleClickEvent, true)
  },
}

export {tapHotspotComponent}
