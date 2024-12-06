module.exports = {
  siteTitle: "Hi! I'm Alvaro!",
  siteDescription: `This is my personal website`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Alvaro Jimenez',
  twitterUsername: 'ajimenezdev',
  githubUsername: 'ajimenezdev',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I'm a full-stack JS developer, currently focused in React/React Native development and blockchain solutions.<br/><br/>
  I worked in multiple stacks (React, AngularJs, .Net, Java, Android...), environments and types of companies (Startup, medium size and big corporate).<br/><br/>
  I currently work remotely as a frontend developer and mainly working with <strong>Javascript, React/ReactNative, NodeJS and Blockchain.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 90,
    },
    {
      name: 'CSS',
      level: 85,
    },
    {
      name: 'Javascript',
      level: 90,
    },
    {
      name: 'React',
      level: 85,
    },
    {
      name: 'ReactNative',
      level: 80,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'Git',
      level: 75,
    },
    {
      name: 'Bitcoin',
      level: 30,
    },
    {
      name: 'Ethereum & smartcontract',
      level: 30,
    },
  ],
  jobs: [
    {
      company: 'Lifelabs.io',
      begin: {
        month: 'may',
        year: '2018',
      },
      duration: null,
      location: 'UK - Remote',
      occupation: 'Lead Frontend Developer',
      description:
        'I joined the company as one of the main developers, leading the frontend and mobile app development and helping with the architecture and coordination of the backend and blokchain teams.',
    },
    /* ... */
  ],
  publications: [
    {
      title: 'React Native intermediate level',
      company_medium: 'OpenWebinars',
      date: {
        month: 'jun',
        year: '2019',
      },
      link: 'https://openwebinars.net/cursos/react-native-intermedio/',
      description:
        'Online training recorded for spanish e-learning platform. The training is for developers who know a little bit of ReactNative and wants to learn more about the platform',
    },{
      title: 'React master level',
      company_medium: 'OpenWebinars',
      date: {
        month: 'jun',
        year: '2019',
      },
      link: 'https://openwebinars.net/cursos/react-native-intermedio/',
      description:
        'Online training recorded for spanish e-learning platform. The training is for developers who know a little bit of ReactNative and wants to learn more about the platform',
    },
    /* ... */
  ],
  education: [
    {
      school: 'University of Balearic Islands',
      degree: 'Bachelor degree',
      field: 'Software Engineering',
      startYear: 2006,
      endYear: 2011,
    },
  ],
  languages: [
    {
      language: 'Spanish',
      level: 'Native tongue',
      code: 'ES',
    },
    {
      language: 'English',
      level: 'Fluid Written & Spoken',
      code: 'GB',
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/ajimenezdev/',
    linkedin: 'https://www.linkedin.com/in/alvarojimenezmartin/',
    github: 'https://github.com/ajimenezdev/',
    email: 'ajmjimens@gmail.com',
  },
  hobbies: [
    {
      name: 'Football',
      icon: 'FaFutbol',
    },
    /* ... */
  ],
  siteUrl: 'https://alvarojimenezmartin.com',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/favicon.jpg',
  resume: '/resume_alvaro_jimenez.pdf',
  headerLinks: [
    // {
    //   label: 'Alvaro Jimenez Martin',
    //   url: '/',
    // },
    {
      label: 'About',
      url: 'about',
    },
    {
      label: 'Skills',
      url: 'skills',
    },
    {
      label: 'Experience',
      url: 'experience',
    },
    {
      label: 'Publications',
      url: 'publications',
    },
    {
      label: 'Education',
      url: 'education',
    },
    {
      label: 'Hobbies',
      url: 'hobbies',
    }
  ],
}