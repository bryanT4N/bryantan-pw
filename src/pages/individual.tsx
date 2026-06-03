import React from 'react';
import Layout from '@theme/Layout';
import styles from './individual.module.css';

export default function IndividualWork() {
  return (
    <Layout title="作品 · Individual Work" description="个人作品 — DFS I Ace Attorney Approximation">
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              作品 <span className={styles.pageTitleEn}>Individual Work</span>
            </h1>
          </header>

          <article className={styles.project}>
            <h2 className={styles.projectTitle}>
              DFS I — Ace Attorney Approximation
            </h2>
            <div className={styles.meta}>2026 Fall · in proposal</div>

            <figure className={styles.figure}>
              <div className={styles.placeholder}>
                <span>静态图 placeholder<br />Concept art coming Fall 2026</span>
              </div>
              <figcaption className={styles.caption}>概念图 · Concept</figcaption>
            </figure>

            <figure className={styles.figure}>
              <div className={styles.placeholder}>
                <span>动图 placeholder<br />Gameplay loop coming Fall 2026</span>
              </div>
              <figcaption className={styles.caption}>玩法演示 · Gameplay loop</figcaption>
            </figure>

            <p className={styles.description}>
              仿《逆转裁判》的法庭辩论推理 demo。当前 proposal 阶段，计划探索分支证据树、玩家推理压力曲线、法庭节奏控制。SMU Guildhall DFS I 项目，2026 秋季正式开始。
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
