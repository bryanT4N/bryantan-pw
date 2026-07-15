import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import MediaGallery from '../components/MediaGallery';
import type { MediaItem } from '../components/MediaGallery';
import styles from './teamwork.module.css';

export default function Teamwork() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);
  const tgp2Base = useBaseUrl('/img/projects/tgp2');

  const tgp2Media: MediaItem[] = [
    { type: 'video', src: `${tgp2Base}/gameplay.mp4`, thumbnail: `${tgp2Base}/gameplay_thumb.jpg` },
    { type: 'image', src: `${tgp2Base}/splitscreen_4p.jpg` },
    { type: 'video', src: `${tgp2Base}/ai_obstacles.mp4`, thumbnail: `${tgp2Base}/ai_obstacles_thumb.jpg` },
    { type: 'image', src: `${tgp2Base}/ai_lanes.png` },
  ];

  return (
    <Layout
      title={translate({ id: 'page.teamwork.title', message: '团队作品', description: 'Teamwork page <title>' })}
      description={translate({ id: 'page.teamwork.description', message: '谭磊轩 · 团队作品', description: 'Teamwork page meta description' })}>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              <Translate id="page.teamwork.heading" description="Teamwork page H1 heading">团队作品</Translate>
            </h1>
          </header>

          <article id="hamsterballin" className={styles.project}>
            <h2 className={styles.projectTitle}>Hamsterballin'</h2>
            <div className={styles.meta}>
              <Translate id="teamwork.tgp2.meta" description="TGP II meta line">2026 · SMU Guildhall · Unreal · 40 人团队</Translate>
            </div>
            <MediaGallery items={tgp2Media} />
            <p className={styles.description}>
              <Translate id="teamwork.tgp2.description" description="TGP II project description">
                街机风格多人赛车游戏，SMU Guildhall TGP II 团队项目。玩家操控可爱的仓鼠在三条风格各异的赛道上竞速，利用仓鼠球独特的滚动和弹跳物理特性，配合七种道具争夺第一。支持最多四人本地分屏。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="teamwork.tgp2.contribution.perception" description="TGP II contribution - perception">
                我在项目中担任 AI 程序。我实现了赛车 AI 的环境感知系统。AI 基于 Unreal 的 Spline 建立赛道坐标系，将赛道切分成多个段落，从而理解当前位置、行驶方向和可用车道宽度。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="teamwork.tgp2.contribution.behavior" description="TGP II contribution - behavior">
                我还实现了赛车 AI 的行为逻辑。AI 通过效用分数评估每条车道的优劣，能够自主选择岔路、调整转弯轨迹。对于赛道上的障碍物和道具，我设计了六级标签系统，AI 会根据标签权重决定避开或靠近。
              </Translate>
            </p>
            <p className={styles.actions}>
              <a className={styles.action} href="https://store.steampowered.com/app/4319370/Hamsterballin/" target="_blank" rel="noopener noreferrer">
                <Translate id="teamwork.tgp2.steam" description="TGP II Steam link">Steam 商店页 →</Translate>
              </a>
            </p>
          </article>

          <article id="arachnot" className={styles.project}>
            <h2 className={styles.projectTitle}>ArachNOT</h2>
            <div className={styles.meta}>
              <Translate id="teamwork.tgp1.meta" description="TGP I meta line (date + school + tech + status)">2025 · SMU Guildhall · Unity · 已完成 · 4 人团队</Translate>
            </div>
            <div className={styles.videoFrame}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/SwW2MTjFZvY"
                title="ArachNOT trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className={styles.description}>
              <Translate id="teamwork.tgp1.description" description="TGP I project description">
                横板 2D 解谜游戏，SMU Guildhall TGP I 团队项目。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="teamwork.tgp1.contribution.web" description="TGP I contribution - web mechanic">
                我在项目中担任 Gameplay 程序和策划。我设计并实现了玩法核心的蛛网机制。蛛网同时具备侧向弹性和牵引两种功能，物理基于 Unity 的关节系统。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="teamwork.tgp1.contribution.abilities" description="TGP I contribution - abilities and UI">
                我还实现了围绕蛛网子弹的角色能力，包括射击和子弹管理、瞄准辅助线，以及蛛网的连接构建和自动断裂。此外我做了菜单界面 UI 和简易的对话系统。
              </Translate>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
