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
    img: 'img/projects/ArachNOT.gif',
    title: 'ArachNOT',
    description:
      '横板 2D 解谜游戏 (2025)，使用 Unity 开发。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。',
    codeLink: '',
    // liveLink: 'files/ArachNOT.zip',
    techstack: ['Unity'],
  },
  {
    img: 'img/projects/Starship.gif',
    title: '个人引擎',
    description:
      '基于 C++ 和 OpenGL 开发的游戏引擎 (2025)，有简单到复杂的多个演示项目。引擎功能涵盖数学工具类与方法，输入系统，音频系统，渲染器，纹理与图像，精灵图与动画，bitmap 字体与文本框，事件系统，开发者控制台，Xml 配置数据等。',
    codeLink: '',
    liveLink: 'files/Starship.zip',
    techstack: ['C++', 'OpenGL'],
  },
  {
    img: 'img/projects/sceneeditor.webp',
    title: '3D场景编辑器',
    description:
      '图形学课程作业 (2020)。 基于 C++ 和 OpenGL 开发，实现的基本功能包括 Blinn-Phong 光照，天空盒，欧拉角摄像机，高度图地形，模型变换，交互控制等。',
    codeLink: 'https://github.com/bryanT4N/3DSE/',
    liveLink: '',
    techstack: ['C++', 'OpenGL'],
  },
/*   {
    img: 'img/projects/pcencoder.webp',
    title: ' A Geometry-based Point Cloud Codec',
    description:
      'Extracurricular Project (2021). A point cloud codec featuring sampling, prediction, transform coding, and entropy coding, utilizing an octree-based and image-based method.',
    codeLink: 'https://github.com/sky-5462/PCEncoder',
    liveLink: '',
    techstack: ['C++'],
  }, */
  {
    img: 'img/projects/bryantanpw.webp',
    title: 'bryantan.net',
    description: '使用 Docusaurus 制作的个人主页，用于信息展示和博客发布。',
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
      //'SLG+项目：管理战斗开发月版本规划；搭建战斗玩法(塔防+自走棋)，技能、Buff、出兵与怪物逻辑、玩家AI、飘字等',
      //'MMORPG项目：宠物系统',
      //'文明与征服：设计主线解谜探索小游戏，产出30+关卡；迭代优化战报等其它系统',
      'SLG+塔防+自走棋，MMORPG，文明与征服',
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
    img: 'img/education/Guildhall_Promo_Logo.png',
    school: '南卫理公会大学',
    city: '达拉斯, 美国',
    study: '交互技术硕士 - 数字游戏开发',
    date: '08/2025 - 06/2027',
  },
  {
    img: 'img/education/Sun_Yat-sen_University_Logo.webp',
    school: '中山大学',
    city: '广州, 中国',
    study: '工学学士 - 计算机科学与技术',
    date: '08/2018 - 06/2022',
  },
];

export { experience, projects, education };
