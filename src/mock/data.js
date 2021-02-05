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
    img: 'project.jpg',
    title: 'Coding and Analysis',
    info: 'I love making cool visualizations and analysis that gives insights into the real world and Kaggle was one of the best places for me to get data and also share my thoughts with the world. You can see some of my notebooks and code by clicking on the picture below.',
    info2: '',
    url: 'https://www.kaggle.com/mitramir5',
    repo: 'https://github.com/mitramir55', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'writings',
    info: "As it is said, The aintest ink is more powerful than the strongest memory!\n Keeping this in mind, I try to write down whatever I learn or have in mind. In writing I can untie so many problems or questions I have in mind and make up a small place for documenting whatever I've done or am doing.",
    info2: '',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'YouTube',
    info: 'One of the fun things about visualizing data is that it can talk with a wide range of people. As I think science and math should be intuitively instructed and tought, I took a step in this path and started making YouTube videos with brand new visualizations each time to both have fun and contribute to the online community, too.',
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
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UC5he3ZiPPZzjP_KZhq3LOHg',
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
    },,
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/mitra_mirshafiee/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
