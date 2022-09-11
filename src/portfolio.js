const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/robyn-smith-27187910b/',
  title: 'RS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Robyn',
  role: 'Junior Software Engineer',
  description:
    'A hard-working, conscientious person who loves to see the big picture and strategise. I decided to make a career change and pursue coding due to my desire to be in a work environment where continued learning is welcomed and encouraged, as well as be able to express my creative side when it comes to finding solutions. I would love to join a team that prioritises development and mentorship. ',
  social: {
    linkedin: 'https://www.linkedin.com/in/robyn-smith-27187910b/',
    github: 'https://github.com/Robsness23',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ultimate Tic-Tac-Toe',
    description:
      'This was my first project for the General Assembly Software Engineering Immersive course. I chose to build Ultimate Tic-Tac-Toe which is inspired by the classic children’s game.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    image: 'https://res.cloudinary.com/dlxbte5xh/image/upload/v1662735300/Screenshot_2022-09-09_at_15.54.47_ieqslv.png',
    sourceCode: 'https://github.com/Robsness23/project-1',
    livePreview: 'https://robsness23.github.io/project-1/',
  },
  {
    name: 'Cocktail Party',
    description:
      'This was the second project for the General Assembly Software Engineering Immersive course. It is a React app that consumes a public API.',
    stack: ['React', 'Node', 'HTML', 'Bulma'],
    image: 'https://res.cloudinary.com/dlxbte5xh/image/upload/v1662735396/Screenshot_2022-09-09_at_15.56.28_zgt7ah.png',
    sourceCode: 'https://github.com/Robsness23/project-2',
    livePreview: 'https://cocktailspartyapp.netlify.app',
  },
  {
    name: 'I Beg your Garden',
    description:
      'This project was the third project for the General Assembly Software Engineering Immersive course. I Beg Your Garden is an e-commerce site that sells house plants that have personality.',
    stack: ['React', 'Express', 'Node', 'MongoDB', 'Chai'],
    image: 'https://res.cloudinary.com/dlxbte5xh/image/upload/v1662735579/Screenshot_2022-09-09_at_15.57.34_p76mxq.png',
    sourceCode: 'https://github.com/Robsness23/project-3-frontend',
    sourceCode2: 'https://github.com/Robsness23/project-3-backend',
    livePreview: 'https://ibyg.netlify.app/',
  },
  {
    name: 'Project Pollinator',
    description:
      'Project Pollinator is a website with two goals, one to inspire people to grow ‘nectar cafes’ in their gardens to attract pollinators and the second to be a working database or a ‘hive mind’ for people to upload plants that attract and provide nutrients for pollinators. ',
    stack: ['Python', 'PostgreSQL', 'Flask', 'SQLAlchemy', 'React', 'Axios'],
    image: 'https://res.cloudinary.com/dlxbte5xh/image/upload/v1662735581/Screenshot_2022-09-09_at_15.59.25_wisrmu.png',
    sourceCode: 'https://github.com/Robsness23/project-4-frontend',
    sourceCode2: 'https://github.com/Robsness23/project-4-backend',
    livePreview: 'https://bit.ly/3A1AWzI',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Bulma',
  'SASS',
  'Express',
  'Node',
  'MongoDB',
  'PostgreSQL',
  'Heroku',
  'Chai',
  'Mocha',
  'Supertest',
  'Git',
  'Data Analysis',
  'Public Speaking',
  'Communication',
  'Salesforce',
]


const interests = [
  'Gardening',
  'Paddleboarding',
  'Rollerskating',
  'Mario Kart',
  'Baking',
  'Animal Crossing',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'robbiesmith23@icloud.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/robyn-smith-27187910b/',
    github: 'https://github.com/Robsness23',
  },
}

export { header, about, projects, skills, interests, contact }
