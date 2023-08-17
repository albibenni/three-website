import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  nextjs,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  deda2,
  threejs,
  intesa,
  forge,
  java,
  threeWebsite,
  coverage,
  exLibris,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export type Service = {
  title: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: creator,
  },
];

export type Technology = {
  name: string;
  icon: string;
};
const technologies: Technology[] = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company_name: 'Agap2 - Dedagroup',
    icon: deda2,
    iconBg: '#4f73ff',
    date: 'May 2022 – current',
    points: [
      '1st Project: the newest cloud native app on AWS to connect and manage orders between fashion brands and suppliers. App written in Java Spring for the backend with Keycloak as Oauth2 authorization server, Kafka to connect the multiple microservices and Docker to handle them, Docker to handle them, a relational database (Postgres) and React (Typescript) for the front end. This is an international project as we work with other Thoughtworks consultant from India and Tunisia.',
      '2nd Project: another cloud native AWS application to handle our clients schedule during store visits. App authenticated via Azure and to handle different roles and visibility. Backend written in NodeJS, NestJS, and React as frontend using Typescript in both. Non-relational database, MongoDB.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Perigea - Intesa San Paolo',
    icon: intesa,
    iconBg: '#ff9663',
    date: 'Sept 2021 - April 2022',
    points: [
      'Working on 3 applications for investing analysis.',
      'Working in a four-person team participating from the design to the develop of the application.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer - Internship',
    company_name: 'Forge',
    icon: forge,
    iconBg: '#fff',
    date: 'Sept 2019 - Jan 2020',
    points: [
      'Web App build from scratch to analytically calculate the overlapping areas of geolocalized services to have a better understanding of the relationship between supply and demand.',
      'Built using NodeJS for the backend to store the data on a MongoDB and plain JavaScript for the front end where the Google APIs were used to draw the map and make the calculations alongside some CSS styling for the HTML.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

type TechAndColor = {
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: TechAndColor[];
  image: string;
  source_code_link: string;
};

const projects: Project[] = [
  {
    name: 'Web Site',
    description:
      'Web-site you are currently watching to practice 3D developing and showcase my portfolio CV.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'yellow-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'treejs',
        color: 'green-text-gradient',
      },
    ],
    image: threeWebsite,
    source_code_link: 'https://github.com/albibenni/three-website',
  },
  {
    name: 'ExLibris',
    description:
      'Backend Book Library template with Oauth token and roles for book rental.',
    tags: [
      {
        name: 'nodeJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'nest',
        color: 'red-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'blue-text-gradient',
      },
    ],
    image: exLibris,
    source_code_link: 'https://github.com/albibenni/ExLibris',
  },
  {
    name: 'Coverage',
    description:
      'Web App to analytically calculate the overlapping areas of geolocalized services to have a better understanding of the relationship between supply and demand.',
    tags: [
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'nodeJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'googleAPI',
        color: 'red-text-gradient',
      },
      {
        name: 'restapi',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: coverage,
    source_code_link: 'https://github.com/albibenni/Coverage',
  },
  // TODO: add the python amazon project
];

export { services, technologies, experiences, testimonials, projects };
