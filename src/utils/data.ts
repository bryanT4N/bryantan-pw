import {
  Experience as ExperienceType,
  Education as EducationType,
  Project as ProjectType,
} from '../types';

const projects: Array<ProjectType> = [
  {
    img: 'img/projects/ArachNOT.gif',
    title: 'ArachNOT — TGP I',
    description:
      '横板 2D 解谜游戏 (2025)，SMU Guildhall TGP I 团队项目，使用 Unity 开发。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。',
    codeLink: '',
    techstack: ['Unity'],
  },
  {
    img: 'img/projects/Starship.gif',
    title: '个人引擎',
    description:
      '基于 C++ 和 OpenGL 开发的游戏引擎 (2025)，有多个演示项目。功能涵盖数学工具类、输入系统、音频系统、渲染器、纹理与图像、精灵图与动画、bitmap 字体与文本框、事件系统、开发者控制台、Xml 配置数据等。',
    codeLink: '',
    liveLink: 'files/Starship.zip',
    techstack: ['C++', 'OpenGL'],
  },
  {
    img: 'img/projects/sceneeditor.webp',
    title: '3D 场景编辑器',
    description:
      '图形学课程作业 (2020)。基于 C++ 和 OpenGL 开发，实现的基本功能包括 Blinn-Phong 光照，天空盒，欧拉角摄像机，高度图地形，模型变换，交互控制等。',
    codeLink: 'https://github.com/bryanT4N/3DSE/',
    liveLink: '',
    techstack: ['C++', 'OpenGL'],
  },
  {
    img: 'img/projects/bryantanpw.webp',
    title: 'bryantan.net',
    description: '使用 Docusaurus 制作的个人主页，用于信息展示和博客发布。',
    codeLink: 'https://github.com/bryanT4N/bryantan-pw',
    techstack: ['ReactJS', 'TypeScript'],
  },
  {
    title: 'DFS I — Ace Attorney Approximation',
    description:
      '仿《逆转裁判》的法庭辩论推理 demo，SMU Guildhall DFS I 项目。当前 proposal 阶段，计划探索分支证据树、玩家推理压力曲线、法庭节奏控制。',
    status: '2026 Fall · in proposal',
    detailLink: '/individual',
    techstack: ['Unity', 'C#'],
  },
  {
    title: 'TGP II',
    description:
      '第二个 SMU Guildhall 团队游戏项目，2027 春季启动。届时本条目更新项目简介、个人职责与最终成片。',
    status: '2027 Spring · upcoming',
    detailLink: '/teamwork',
  },
];

const experience: Array<ExperienceType> = [
  {
    img: 'img/experience/4399-logo.png',
    jobTitle: '战斗 / 系统策划',
    date: '2022.07 — 2024.05',
    company: '广州四三九九信息科技有限公司',
    location: '广州',
    tasks: [
      'SLG + 塔防 + 自走棋项目：管理战斗开发月版本规划；搭建战斗玩法、技能、Buff、出兵与怪物逻辑、玩家 AI、飘字等。MMORPG 项目：宠物系统。《文明与征服》：设计主线解谜探索小游戏，产出 30+ 关卡；迭代优化战报等系统。',
    ],
  },
  {
    img: '',
    jobTitle: '策划实习生',
    date: '2021.07 — 2021.08',
    company: '广州四三九九信息科技有限公司',
    location: '广州',
    tasks: ['参与《文明与征服》项目数值校验与关卡测试。'],
  },
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
