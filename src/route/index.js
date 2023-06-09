// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  address: 'Vylitsya Benderi, 2022/24/02',
  name: {
    firstname: 'Steve',
    lastname: 'Jobs',
  },
  position: 'Junior Fullstack JS Developer',
  salary: {
    amount: '$600 a month',
  },
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'GIT',
          point: 7,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 6,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 5,
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
        // 'HTML',
        // 'Handlebars',
        // 'VS Code',
        // 'GIT',
        // 'Terminal',
        // 'NPM',
      ],
      hobbies: [
        {
          name: 'Brain storming',
          isMain: true,
        },
        {
          name: 'Brain washing',
          isMain: false,
        },
        {
          name: 'Brain refreshing',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Education',
    },
    header,

    main: {
      sertificates: [
        { name: 'Supper-Dupper', id: 1234 },
        { name: 'Supper-Poopper', id: 4567 },
        { name: 'Supper-Joopper', id: 7890 },
      ],

      education: [
        {
          name: 'School Nr 4',
          isEnd: true,
        },
        {
          name: 'School Nr 5',
          isEnd: true,
        },
        {
          name: 'School Nr 6',
          isEnd: true,
        },
        {
          name: 'ITBrains - "Brain Storm" ',
          isEnd: false,
        },
        // 'school Nr 4',
        // 'school Nr 5',
        // 'school Nr 6',
        // 'school Nr 7',
      ],
    },
    footer,
    // footer: {
    //   social: {
    //     email: {
    //       text: 'dmytro@mail.com',
    //       href: 'mailto:dmytro@mail.com',
    //     },
    //     phone: {
    //       text: '+380670000123',
    //       href: 'tel:+380670000123',
    //     },
    //     linkedin: {
    //       text: 'Linkedin',
    //       href: 'https://www.linkedin.com/in/dmytro-test',
    //     },
    //   },
    // },
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// ================================================================

router.get('/work', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Work',
    },
    header,

    main: {
      works: [
        {
          position:
            'The Father of the "IPhone Generation" ',
          company: {
            name: 'Apple Inc. ',
            // url: 'https://www.apple.com/',
            url: null,
          },
          duration: {
            from: ' "Ding-Ding-Hello", B.C.',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Used to be a window shopper',
              stacksAmount: 3,
              stacks: [
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'React JS',
                },
                {
                  name: 'NodeJS',
                },
              ],
              awardsAmount: 2,
              awards: [
                {
                  name: 'Big Sapsibo',
                },
                {
                  name: 'Gold Medal',
                },
              ],
            },
          ],
        },
        // {
        //   position: 'Sapcewalker ',
        //   company: {
        //     name: 'Sapce-X ',
        //     url: 'https://www.spacex.com/',
        //   },
        //   duration: {
        //     from: 'Earth',
        //     to: null,
        //   },
        //   projectAmount: 3,
        // },
      ],
    },
    footer,
  })
})

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              teamMembers: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
