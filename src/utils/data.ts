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
/*   {
    img: 'img/projects/vinsar.png',
    title: 'Optimization of Visual-Inertial SLAM for Mobile AR with Improved Feature Tracking in Low-Light Environments',
    description:
      'Undergraduate thesis (2022). Ported VINS-Mono to Android devices and improved tracking performance in low-light environments.',
    codeLink: 'files/vinsarandroid.zip',
    liveLink: '',
    techstack: ['C++', 'Java'],
  }, */
  {
    img: 'img/projects/sceneeditor.png',
    title: '3D场景编辑器',
    description:
      '图形学课程作业 (2020)。 基于 C++ 和 OpenGL 开发，实现的基本功能包括 Blinn-Phong 光照，天空盒，欧拉角摄像机，高度图地形，模型变换，交互控制等。',
    codeLink: 'https://github.com/bryanT4N/3DSE/',
    liveLink: '',
    techstack: ['C++', 'OpenGL'],
  },
/*   {
    img: 'img/projects/pcencoder.png',
    title: ' A Geometry-based Point Cloud Codec',
    description:
      'Extracurricular Project (2021). A point cloud codec featuring sampling, prediction, transform coding, and entropy coding, utilizing an octree-based and image-based method.',
    codeLink: 'https://github.com/sky-5462/PCEncoder',
    liveLink: '',
    techstack: ['C++'],
  }, */
  {
    img: 'img/projects/bryantanpw.png',
    title: 'bryantan.net',
    description: '使用 Docusaurus 制作的个人主页，用于分享信息和发布博客。',
    codeLink: 'https://github.com/bryanT4N/bryantan-pw',
    techstack: ['ReactJS', 'TypeScript'],
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/experience/4399-logo.png',
    jobTitle: '战斗/系统策划',
    date: '07/2022 - 05/2024',
    company: '广州四三九九信息科技有限公司',
    location: '广州, 中国',
    tasks: [
      'SLG+项目：管理战斗开发月版本规划；搭建战斗玩法(塔防+自走棋)，技能、Buff、出兵与怪物逻辑、玩家AI、飘字等',
      'MMORPG项目：宠物系统',
      '文明与征服：设计主线解谜探索小游戏，产出30+关卡；迭代优化战报等其它系统',
    ],
    // techstack: ['C++', 'Java'],
  },
  {
    img: '',
    jobTitle: '策划实习',
    date: '07/2021 - 08/2021',
    // company: 'Guangzhou 4399 Information Technology Co., Ltd.',
    // location: 'Guangzhou, China',
    tasks: [
      '文明与征服',
    ],
  },
];

const education: Array<EducationType> = [
  {
    img: 'img/education/Sun_Yat-sen_University_Logo.png',
    school: '中山大学',
    city: '广州, 中国',
    study: '计算机科学与技术 - 工学学士',
    date: '08/2018 - 06/2022',
  },
];

export { experience, projects, education };
