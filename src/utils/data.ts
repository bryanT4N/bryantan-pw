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
    img: 'img/projects/tgp2/gameplay.mp4',
    title: "Hamsterballin'",
    description: translate({
      id: 'data.project.tgp2.description',
      message: '街机风格多人仓鼠球赛车游戏，使用 Unreal 开发。玩家操控仓鼠在多条赛道上竞速，利用独特的滚动弹跳物理和七种道具争夺第一。',
      description: 'TGP II project description (Home card)',
    }),
    detailLink: '/teamwork#hamsterballin',
    techstack: ['2026', 'Unreal'],
  },
  {
    img: 'img/projects/dfs1/gameplay.gif',
    title: 'Ace Attorney Approximation',
    description: translate({
      id: 'data.project.dfs1.description',
      message: '逆转裁判风格的法庭剧情游戏，使用自己搭建的 C++ 引擎开发。还原了对话、法庭辩论和交叉询问等核心玩法。',
      description: 'DFS I project description (Home card)',
    }),
    detailLink: '/individual#aaa',
    techstack: ['2026', 'C++'],
  },
  {
    img: 'img/projects/engine/chess_lit.png',
    title: translate({
      id: 'data.project.engine.title',
      message: '自制引擎',
      description: 'Custom engine project title',
    }),
    description: translate({
      id: 'data.project.engine.description',
      message: '基于 C++ 搭建的游戏引擎。支持 2D/3D DirectX 11 渲染、Blinn-Phong 光照、网络对战、保留模式 UI 等。',
      description: 'Personal engine project description',
    }),
    detailLink: '/individual#engine',
    techstack: ['2025', 'C++'],
  },
  {
    img: 'img/projects/ArachNOT.gif',
    title: 'ArachNOT',
    description: translate({
      id: 'data.project.arachnot.description',
      message: '横板 2D 解谜游戏，使用 Unity 开发。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。',
      description: 'ArachNOT project description on Home',
    }),
    detailLink: '/teamwork#arachnot',
    techstack: ['2025', 'Unity'],
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
    date: '2021.07 — 2024.05',
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
    school: translate({
      id: 'data.education.smu.school',
      message: '南卫理公会大学',
      description: 'SMU Guildhall school name',
    }),
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
