import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './individual.module.css';

export default function IndividualWork() {
  const gifUrl = useBaseUrl('/img/projects/Starship.gif');
  const buildUrl = useBaseUrl('/files/Starship.zip');

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

          {/* v1.8: 非 coming-soon 的真项目放上面，coming-soon (DFS) 放底部 */}
          <article className={styles.project}>
            <h2 className={styles.projectTitle}>
              <Translate id="individual.engine.title" description="Personal engine title on Individual page">个人引擎</Translate>
            </h2>
            <div className={styles.meta}>
              <Translate id="individual.engine.meta" description="Personal engine meta line">2025 · C++ · OpenGL · 个人项目</Translate>
            </div>

            <figure className={styles.figure}>
              <img className={styles.image} src={gifUrl} alt="Personal engine — running demo" loading="lazy" />
              <figcaption className={styles.caption}>
                <Translate id="individual.engine.running.caption" description="Engine animated image caption">运行演示 · Running (Starship demo)</Translate>
              </figcaption>
            </figure>

            <p className={styles.description}>
              <Translate id="individual.engine.description" description="Personal engine description on Individual page">
                基于 C++ 和 OpenGL 从零搭建的游戏引擎。实现了数学库、输入系统、音频系统、渲染器、纹理与图像、精灵图与动画、bitmap 字体与文本框、事件系统、开发者控制台等模块。上方为用该引擎制作的小游戏 Starship 的画面。
              </Translate>
            </p>
            <p className={styles.actions}>
              <a className={styles.action} href={buildUrl} download>
                <Translate id="individual.engine.download" description="Engine demo build download link">下载 Starship demo 构建 ↓</Translate>
              </a>
            </p>
          </article>

          <article className={styles.project}>
            <h2 className={styles.projectTitle}>
              DFS I — Ace Attorney Approximation
            </h2>
            <div className={styles.meta}>
              <Translate id="individual.dfs1.meta" description="DFS I project meta (date + status)">2026 Fall · in proposal</Translate>
            </div>

            <figure className={styles.figure}>
              <div className={styles.placeholder}>
                <span>
                  <Translate id="individual.dfs1.concept.placeholder" description="DFS I static-image placeholder">静态图 placeholder</Translate>
                  <br />
                  <Translate id="individual.dfs1.concept.coming" description="DFS I concept-art coming line">Concept art coming Fall 2026</Translate>
                </span>
              </div>
              <figcaption className={styles.caption}>
                <Translate id="individual.dfs1.concept.caption" description="DFS I concept image caption">概念图 · Concept</Translate>
              </figcaption>
            </figure>

            <p className={styles.description}>
              <Translate id="individual.dfs1.description" description="DFS I project description">
                Coming soon.
              </Translate>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
