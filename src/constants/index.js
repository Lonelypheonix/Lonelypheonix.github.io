import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  math,
  movie,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  privtc,
  iipp,
  pheonixsiem,
  portfolio,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Cyber Security',
    icon: frontend,
  },
  {
    title: 'Artifical Intelligence',
    icon: backend,
  },
  {
    title: 'Web Development',
    icon: ux,
  },
  {
    title: 'WAPT',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Pentester | HR | 3D and Stimulation Engineer',
    company_name: 'Vikasana',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - June 2024',
  },
  {
    title: 'Penetration Testing - Intern',
    company_name: 'Virtual Testing Foundation',
    icon: microverse,
    iconBg: '#333333',
    date: 'Oct 2021 - Dec 2021',
  },
  {
    title: 'Research Intern - IIPP',
    company_name: 'National Yang Ming Chiao Tung University Tainan Campus',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sept 2023 - Dec 2023',
  },
  {
    title: 'Research Intern',
    company_name: 'National Yang Ming Chiao Tung University Hsinchu Campus',
    icon: dcc,
    iconBg: '#333333',
    date: 'Dec 2023 - Present',
  },
  {
    title: 'Btech in Computer Science and Engineering with Specialization in Cyber Security',
    company_name: 'Presidency University',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Dec 2020 - July 2024',
  },
  {
    title: 'Masters in Aritificial Intelligence',
    company_name: 'National Yang Ming Chiao Tung University Tainan Campus',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sept 2024 - Present',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Simple Portfolio',
    description: 'A Simple Portfolio that shows m work in light colorful theme.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Lonelypheonix/simple-portfolio',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Portfolio',
    description:
      'A Portfolio website that displays the details about my work in retro dark theme.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: 'https://github.com/Lonelypheonix/Portfolio-website',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'IIPP Internship',
    description: `A single-repo that contains all my work i did during my IIPP internship at Ntionl Yang Ming Chiao Tung University.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: iipp,
    repo: 'https://github.com/Lonelypheonix/IIPP-Internship',
    demo: 'https://github.com/Lonelypheonix/IIPP-Internship',
  },
  {
    id: 'project-4',
    name: 'Priv-TC Implementation',
    description:
      'This is the implementation of PrivTc.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: privtc,
    repo: 'https://github.com/Lonelypheonix/PrivTC-Implementation',
    demo: 'https://github.com/Lonelypheonix/PrivTC-Implementation',
  },
  {
    id: 'project-5',
    name: 'Pheonix-SEIM',
    description: 'An SEIM tool',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pheonixsiem,
    repo: 'https://github.com/Lonelypheonix/Pheonix-SIEM',
    demo: 'https://github.com/Lonelypheonix/Pheonix-SIEM',
  }
  // ,
  // {
  //   id: 'project-6',
  //   name: 'AniPass',
  //   description: 'An Anime Streaming website built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/Lonelypheonix/AniPass',
  //   demo: 'https://anipass.netlify.app/',
  // }
];

export { services, technologies, experiences, projects };
