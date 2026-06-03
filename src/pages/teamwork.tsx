import React from 'react';
import Layout from '@theme/Layout';
import styles from './teamwork.module.css';

export default function Teamwork() {
  return (
    <Layout title="团队 · Teamwork" description="团队作品 — SMU Guildhall TGP I (ArachNOT) & TGP II">
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              团队 <span className={styles.pageTitleEn}>Teamwork</span>
            </h1>
          </header>

          <article className={styles.project}>
            <h2 className={styles.projectTitle}>TGP I — ArachNOT</h2>
            <div className={styles.meta}>2025 · SMU Guildhall · Unity · 已完成</div>
            <div className={styles.videoFrame}>
              <div className={styles.placeholder}>
                <span>▷ ArachNOT trailer placeholder<br />YouTube embed coming</span>
              </div>
            </div>
            <p className={styles.description}>
              横板 2D 解谜游戏，SMU Guildhall TGP I 团队项目。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。
            </p>
          </article>

          <article className={styles.project}>
            <h2 className={styles.projectTitle}>TGP II</h2>
            <div className={styles.meta}>2027 Spring · SMU Guildhall · 待启动</div>
            <div className={styles.videoFrame}>
              <div className={styles.placeholder}>
                <span>▷ Trailer coming Spring 2027</span>
              </div>
            </div>
            <p className={styles.description}>
              第二个 SMU Guildhall 团队游戏项目，2027 春季启动。届时本页面更新项目简介、个人职责、技术贡献与最终成片。
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
