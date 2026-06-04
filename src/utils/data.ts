import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

// v1.5: "近期项目" 只展示 4 条（ArachNOT / 个人引擎 / DFS I / TGP II）
// 旧项目（3D 场景编辑器 / bryantan.net）已注释，等以后需要再启用
const projects: Array<ProjectType> = [
  {
    img: 'img/projects/ArachNOT.gif',
    title: 'ArachNOT',
    description:
      '横板 2D 解谜游戏 (2025)，使用 Unity 开发。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。',
    codeLink: '',
    techstack: ['Unity'],
  },
  {
    img: 'img/projects/Starship.gif',
    title: '个人引擎',
    description:
      '基于 C++ 和 OpenGL 开发的游戏引擎 (2025)。功能涵盖数学工具类、输入系统、音频系统、渲染器、纹理与图像、精灵图与动画、bitmap 字体与文本框、事件系统、开发者控制台等。',
    codeLink: '',
    liveLink: 'files/Starship.zip',
    techstack: ['C++', 'OpenGL'],
  },
  // {
  //   img: 'img/projects/sceneeditor.webp',
  //   title: '3D 场景编辑器',
  //   description:
  //     '图形学课程作业 (2020)。基于 C++ 和 OpenGL 开发，实现的基本功能包括 Blinn-Phong 光照，天空盒，欧拉角摄像机，高度图地形，模型变换，交互控制等。',
  //   codeLink: 'https://github.com/bryanT4N/3DSE/',
  //   liveLink: '',
  //   techstack: ['C++', 'OpenGL'],
  // },
  // {
  //   img: 'img/projects/bryantanpw.webp',
  //   title: 'bryantan.net',
  //   description: '使用 Docusaurus 制作的个人主页，用于信息展示和博客发布。',
  //   codeLink: 'https://github.com/bryanT4N/bryantan-pw',
  //   techstack: ['ReactJS', 'TypeScript'],
  // },
  {
    title: 'DFS I',
    description: 'Coming soon.',
    status: '2026 Fall · in proposal',
    detailLink: '/individual',
    techstack: ['Unity', 'C#'],
  },
  {
    title: 'TGP II',
    description: 'Coming soon.',
    status: '2027 Spring · upcoming',
    detailLink: '/teamwork',
  },
];

// v1.5: tasks 拆 3 条还原换行（Bryan 反馈：开始作业前每项一行）；实习生记录注释掉，不展示
const experience: Array<ExperienceType> = [
  {
    img: 'img/experience/4399-logo.png',
    jobTitle: '系统 / 战斗策划',
    date: '2022.07 — 2024.05',
    company: '广州四三九九信息科技有限公司',
    location: '广州',
    tasks: [
      'SLG+塔防+自走棋项目：搭建战斗玩法、技能、Buff、出兵与怪物逻辑、玩家 AI、飘字等，管理战斗开发月版本规划。',
      'MMORPG 项目：宠物系统。',
      'SLG《文明与征服》：设计主线解谜探索小游戏，产出 30+ 关卡。优化迭代战报等系统。',
    ],
  },
  // {
  //   img: 'img/experience/4399-logo.png',
  //   jobTitle: '策划实习生',
  //   date: '2021.07 — 2021.08',
  //   company: '广州四三九九信息科技有限公司',
  //   location: '广州',
  //   tasks: ['参与《文明与征服》项目数值校验与关卡测试。'],
  // },
];

const education: Array<EducationType> = [
  {
    img: 'img/education/Guildhall_Promo_Logo.png',
    school: 'Southern Methodist University (SMU Guildhall)',
    city: 'Dallas, USA',
    study: '交互技术硕士 — 数字游戏开发',
    date: '2025.08 — 2027.06',
  },
  {
    img: 'img/education/Sun_Yat-sen_University_Logo.webp',
    school: '中山大学',
    city: '广州',
    study: '工学学士 — 计算机科学与技术',
    date: '2018.08 — 2022.06',
  },
];

export { experience, projects, education };
