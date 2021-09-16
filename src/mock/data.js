import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ermir Telhallari', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ermir Telhallari',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'eri.jpg',
  paragraphOne: 'Resourceful, flexible, innovative, and professional project manager with considerable knowledge of the construction industry and full stack applications. ',
  paragraphTwo: 'I have proven my expertise and passion with real world tech related projects, such as designing full stack IPTV android applications, bespoke websites, ecommerce platforms and SEO optimizations. Through these projects Ive worked with over 30 businesses and have fostered great relations with a wide variety client.',
  paragraphThree: 'Moreover, I possess a wide variety of testing experience both on web and mobile platforms. I have established a deep competency in the technologies listed below over the last several years and an even deeper passion for all things software related',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pro1.jpg',
    title: 'thewebfuel.co.uk',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cPortfolio.jpg',
    title: 'CPortfolio',
    info: 'Clean Design Parallax Scrolling Bootstrap 3 HTML5/CSS3 Javascript Table Compatibility Font Awesome',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AENeon.jpg',
    title: 'AENeon - Modern Design',
    info: 'AEneon is a simple but effective template. designed to revolutionise modern day web surfing. Easy to navigate but effective in its purpose. Developed through HTML5, CSS3 and bootstrap, the colours enlighten audiences.',
    info2: 'Clean Design, Parallax Scrolling, Bootstrap 3.1, HTML5/CSS3, Javascript, Table Compatibility, Font Awesome and Youtube Video Background Free zozo Tabs free Revolution Slider',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'masteri@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/Ermir.Telhallari',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eri-telhallari',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/masteri88',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
