import { translate } from '@docusaurus/Translate';
import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

// v1.5: "近期项目" 只展示 4 条（ArachNOT / 个人引擎 / DFS I / TGP II）
// v1.6: i18n via @docusaurus/Translate#translate() — per-locale SSR build picks the right message
const projects: Array<ProjectType> = [
  {
    img: 'img/projects/ArachNOT.gif',
    title: 'ArachNOT',
    description: translate({
      id: 'data.project.arachnot.description',
      message: '横板 2D 解谜游戏 (2025)，使用 Unity 开发。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。',
      description: 'ArachNOT project description on Home',
    }),
    codeLink: '',
    detailLink: '/teamwork',
    techstack: ['Unity'],
  },
  {
    img: 'img/projects/Starship.gif',
    title: translate({
      id: 'data.project.engine.title',
      message: '个人引擎',
      description: 'Personal engine project title',
    }),
    description: translate({
      id: 'data.project.engine.description',
      message: '基于 C++ 和 OpenGL 开发的游戏引擎 (2025)。功能涵盖数学工具类、输入系统、音频系统、渲染器、纹理与图像、精灵图与动画、bitmap 字体与文本框、事件系统、开发者控制台等。',
      description: 'Personal engine project description',
    }),
    codeLink: '',
    detailLink: '/individual',
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
    description: translate({
      id: 'data.project.dfs1.description',
      message: 'Coming soon.',
      description: 'DFS I project description (Home card placeholder)',
    }),
    status: translate({
      id: 'data.project.dfs1.status',
      message: '2026 Fall · in proposal',
      description: 'DFS I project status badge (Home card)',
    }),
    detailLink: '/individual',
    techstack: ['Unity', 'C#'],
  },
  {
    title: 'TGP II',
    description: translate({
      id: 'data.project.tgp2.description',
      message: 'Coming soon.',
      description: 'TGP II project description (Home card placeholder)',
    }),
    status: translate({
      id: 'data.project.tgp2.status',
      message: '2027 Spring · upcoming',
      description: 'TGP II project status badge (Home card)',
    }),
    detailLink: '/teamwork',
  },
];

// v1.5: tasks 拆 3 条还原换行；实习生记录注释掉
const experience: Array<ExperienceType> = [
  {
    img: 'img/experience/4399-logo.png',
    jobTitle: translate({
      id: 'data.experience.4399.jobTitle',
      message: '系统 / 战斗策划',
      description: '4399 job title',
    }),
    date: '2022.07 — 2024.05',
    company: translate({
      id: 'data.experience.4399.company',
      message: '广州四三九九信息科技有限公司',
      description: '4399 company name',
    }),
    location: translate({
      id: 'data.experience.4399.location',
      message: '广州',
      description: '4399 work location',
    }),
    tasks: [
      translate({
        id: 'data.experience.4399.task.1',
        message: 'SLG+塔防+自走棋项目：搭建战斗玩法、技能、Buff、出兵与怪物逻辑、玩家 AI、飘字等，管理战斗开发月版本规划。',
        description: '4399 task 1 (SLG+TD+autobattler)',
      }),
      translate({
        id: 'data.experience.4399.task.2',
        message: 'MMORPG 项目：宠物系统。',
        description: '4399 task 2 (MMORPG pet system)',
      }),
      translate({
        id: 'data.experience.4399.task.3',
        message: 'SLG《文明与征服》：设计主线解谜探索小游戏，产出 30+ 关卡。优化迭代战报等系统。',
        description: '4399 task 3 (Civilization & Conquest)',
      }),
    ],
  },
];

const education: Array<EducationType> = [
  {
    img: 'img/education/Guildhall_Promo_Logo.png',
    school: 'Southern Methodist University (SMU Guildhall)',
    city: 'Dallas, USA',
    study: translate({
      id: 'data.education.smu.study',
      message: '交互技术硕士 — 数字游戏开发',
      description: 'SMU Guildhall degree',
    }),
    date: '2025.08 — 2027.06',
  },
  {
    img: 'img/education/Sun_Yat-sen_University_Logo.webp',
    school: translate({
      id: 'data.education.sysu.school',
      message: '中山大学',
      description: 'Sun Yat-sen University name',
    }),
    city: translate({
      id: 'data.education.sysu.city',
      message: '广州',
      description: 'Sun Yat-sen University city',
    }),
    study: translate({
      id: 'data.education.sysu.study',
      message: '工学学士 — 计算机科学与技术',
      description: 'Sun Yat-sen University degree',
    }),
    date: '2018.08 — 2022.06',
  },
];

export { experience, projects, education };
