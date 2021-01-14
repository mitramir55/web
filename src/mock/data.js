import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MitraMir | DS', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Coding and Analysis',
    info: '',
    info2: '',
    url: 'https://www.kaggle.com/mitramir5',
    repo: 'https://github.com/mitramir55', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'writings',
    info: '',
    info2: '',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'YouTube',
    info: 'bluh bluh bluh',
    info2: '',
    url: 'https://www.youtube.com/channel/UC5he3ZiPPZzjP_KZhq3LOHg',
    
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mitra.mirshafiee@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'YouTube',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3B7qHFeXUrThm2h1DCg1o0aw%3D%3D',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mitramir55',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
