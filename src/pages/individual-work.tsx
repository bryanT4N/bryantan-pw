import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import MediaGallery from '../components/MediaGallery';
import type { MediaItem } from '../components/MediaGallery';
import styles from './individual-work.module.css';

export default function IndividualWork() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);
  const engineBase = useBaseUrl('/img/projects/engine');
  const dfs1Base = useBaseUrl('/img/projects/dfs1');

  const engineMedia: MediaItem[] = [
    { type: 'video', src: `${engineBase}/Doomenstein.mp4`, thumbnail: `${engineBase}/Doomenstein_thumb.jpg` },
    { type: 'image', src: `${engineBase}/chess_lit.png` },
    { type: 'image', src: `${engineBase}/chess_normals.png` },
    { type: 'image', src: `${engineBase}/loading.png` },
  ];

  const dfs1Media: MediaItem[] = [
    { type: 'image', src: `${dfs1Base}/courtroom.png` },
    { type: 'image', src: `${dfs1Base}/gameplay.gif` },
    { type: 'image', src: `${dfs1Base}/objection.png` },
    { type: 'image', src: `${dfs1Base}/cross_examination.png` },
  ];

  return (
    <Layout
      title={translate({ id: 'page.individual.title', message: '个人作品', description: 'Individual page <title>' })}
      description={translate({ id: 'page.individual.description', message: '谭磊轩 · 个人作品', description: 'Individual page meta description' })}>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              <Translate id="page.individual.heading" description="Individual page H1 heading">个人作品</Translate>
            </h1>
          </header>

          <article id="aaa" className={styles.project}>
            <h2 className={styles.projectTitle}>
              Ace Attorney Approximation
            </h2>
            <div className={styles.meta}>
              <Translate id="individual.dfs1.meta" description="DFS I project meta">2026 · C++ · 个人项目</Translate>
            </div>

            <MediaGallery items={dfs1Media} />

            <p className={styles.description}>
              <Translate id="individual.dfs1.description" description="DFS I project description">
                逆转裁判风格的法庭剧情游戏，使用自己搭建的 C++ 引擎开发。还原了原版第一章《初次的逆转》的完整流程，包括对话、法庭辩论和交叉询问。法庭辩论部分还原了原版的交叉询问机制，玩家可以对证词提出质疑或者出示证据反驳。系统会判断证据是否正确，错误时回到证词继续，正确时推进剧情。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="individual.dfs1.dialogue" description="DFS I dialogue system">
                我从零实现了一套流式对话系统。对话以自定义的纯文本脚本格式编写，用尖括号标签控制演出。标签涵盖角色立绘、背景、音效、屏幕特效、文字速度和流程跳转等。这些标签可以内嵌在文字中间，在打字机显示到该位置时精确触发，比如说到关键词时播放音效或晃动屏幕。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="individual.dfs1.ui" description="DFS I UI system">
                引擎的保留模式 UI 不使用第三方库。支持面板、按钮、标签、图片、网格和流式布局等控件，支持九宫格纹理渲染和锚点布局。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="individual.dfs1.data" description="DFS I data-driven">
                角色、证据、逐帧动画等资源定义全部通过 XML 数据文件驱动，对话脚本则使用自定义的纯文本流式格式。我还基于 Luban 工具二次开发了一个通用的右键导表选单，支持一键从 Excel 导出到 XML，全数据驱动的配置工作流很方便。
              </Translate>
            </p>
          </article>

          <article id="engine" className={styles.project}>
            <h2 className={styles.projectTitle}>
              <Translate id="individual.engine.title" description="Custom engine title on Individual page">自制引擎</Translate>
            </h2>
            <div className={styles.meta}>
              <Translate id="individual.engine.meta" description="Personal engine meta line">2025 · C++ · 个人项目</Translate>
            </div>

            <MediaGallery items={engineMedia} />

            <p className={styles.description}>
              <Translate id="individual.engine.description" description="Personal engine description on Individual page">
                基于 C++ 搭建的游戏引擎，支持 2D 和 3D DirectX 11 渲染，支持 obj 和 fbx 模型加载，支持 Blinn-Phong 光照和 shader。
              </Translate>
            </p>
            <p className={styles.description}>
              <Translate id="individual.engine.features" description="Personal engine feature list">
                实现了事件系统、游戏内控制台命令调试、网络连接对战、手柄和鼠标输入、2D 简易物理、精灵图和动画、字体与文本框、ImGui 和保留模式 UI、支持 JSON 和 XML 数据驱动。
              </Translate>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
