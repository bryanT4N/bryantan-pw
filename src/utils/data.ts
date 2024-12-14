import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const caculateWorkLength = (startMonth: Date, endMonth: Date): number => {
  let months = (endMonth.getFullYear() - startMonth.getFullYear()) * 12;
  months -= startMonth.getMonth() + 1;
  months += endMonth.getMonth();
  return months <= 0 ? 0 : months;
};

const projects: Array<ProjectType> = [
  {
    img: 'img/projects/vinsar.png',
    title: 'Optimization of Visual-Inertial SLAM for Mobile AR with Improved Feature Tracking in Low-Light Environments',
    description:
      'Undergraduate thesis (2022). Ported VINS-Mono to Android devices and improved tracking performance in low-light environments.',
    codeLink: 'files/vinsarandroid.zip',
    liveLink: '',
    techstack: ['C++', 'Java'],
  },
  {
    img: 'img/projects/sceneeditor.png',
    title: '3D Scene Editor',
    description:
      'Final project for Computer Graphics course (2020). Developed a scene editor using C++ and OpenGL, implementing features such as skyboxes, terrain, model transformation, Euler angle camera, and Blinn-Phong lighting.',
    codeLink: 'https://github.com/bryanT4N/Simple_Scene_Editor/',
    liveLink: '',
    techstack: ['C++', 'OpenGL'],
  },
  {
    img: 'img/projects/pcencoder.png',
    title: ' A Geometry-based Point Cloud Codec',
    description:
      'Extracurricular Project (2021). A point cloud codec featuring sampling, prediction, transform coding, and entropy coding, utilizing an octree-based and image-based method.',
    codeLink: 'https://github.com/sky-5462/PCEncoder',
    liveLink: '',
    techstack: ['C++'],
  },
  {
    img: 'img/projects/bryantanpw.png',
    title: 'bryantan.net',
    description: 'Personal website. Designed to introduce myself and share personal information. I will also post blogs here in the future.',
    codeLink: 'https://github.com/bryanT4N/bryantan-pw',
    techstack: ['ReactJS', 'TypeScript'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/experience/4399-logo.png',
    jobTitle: 'System Designer',
    date: '02/2024 - 05/2024',
    company: 'Guangzhou 4399 Information Technology Co., Ltd.',
    location: 'Guangzhou, China',
    tasks: [
      'Pet system for a turn-based MMORPG.',
    ],
    // techstack: ['C++', 'Java'],
  },
  {
    img: '',
    jobTitle: 'Lead Combat Designer',
    date: '03/2023 - 02/2024',
    // company: 'Guangzhou 4399 Information Technology Co., Ltd.',
    // location: 'Guangzhou, China',
    tasks: [
      'Combat system and related features for a 4X Strategy + Auto Battler game.',
    ],
  },
  {
    img: '',
    jobTitle: 'Level Designer',
    date: '06/2022 - 03/2023',
    // company: 'Guangzhou 4399 Information Technology Co., Ltd.',
    // location: 'Guangzhou, China',
    tasks: [
      'Designed an exploration puzzle game for the main storyline in 𝘌𝘳𝘢 𝘰𝘧 𝘊𝘰𝘯𝘲𝘶𝘦𝘴𝘵 (4X), creating over 30 mini-game levels.',
      'Iterated on other systems and some combat-related features such as battle reports.',
    ],
  },
  {
    img: '',
    jobTitle: 'Game Designer Intern',
    date: '07/2021 - 06/2022',
    // company: 'Guangzhou 4399 Information Technology Co., Ltd.',
    // location: 'Guangzhou, China',
    tasks: [
      'Assisted with various tasks. Helped improve system features for 𝘌𝘳𝘢 𝘰𝘧 𝘊𝘰𝘯𝘲𝘶𝘦𝘴𝘵.',
    ],
  },
];

const education: Array<EducationType> = [
  {
    img: 'img/education/Sun_Yat-sen_University_Logo.png',
    school: 'Sun Yat-sen University',
    city: 'Guangzhou, China',
    study: 'B.Eng. in Computer Science and Technology',
    date: '08/2018 - 06/2022',
  },
];

export { experience, projects, education };
