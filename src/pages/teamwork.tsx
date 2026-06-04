import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './teamwork.module.css';

export default function Teamwork() {
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

          <article className={styles.project}>
            <h2 className={styles.projectTitle}>TGP I — ArachNOT</h2>
            <div className={styles.meta}>
              <Translate id="teamwork.tgp1.meta" description="TGP I meta line (date + school + tech + status)">2025 · SMU Guildhall · Unity · 已完成</Translate>
            </div>
            <div className={styles.videoFrame}>
              <div className={styles.placeholder}>
                <span>
                  <Translate id="teamwork.tgp1.trailer.placeholder" description="TGP I trailer placeholder line 1">▷ ArachNOT trailer placeholder</Translate>
                  <br />
                  <Translate id="teamwork.tgp1.trailer.coming" description="TGP I trailer placeholder line 2">YouTube embed coming</Translate>
                </span>
              </div>
            </div>
            <p className={styles.description}>
              <Translate id="teamwork.tgp1.description" description="TGP I project description">
                横板 2D 解谜游戏，SMU Guildhall TGP I 团队项目。玩家扮演一只因不会正常攀爬而受到排挤的蜘蛛，利用它特殊的弹性蛛网穿越障碍、躲避危险，登至蜘蛛巢穴顶部。
              </Translate>
            </p>
          </article>

          <article className={styles.project}>
            <h2 className={styles.projectTitle}>TGP II</h2>
            <div className={styles.meta}>
              <Translate id="teamwork.tgp2.meta" description="TGP II meta line (date + school + status)">2027 Spring · SMU Guildhall · 待启动</Translate>
            </div>
            <div className={styles.videoFrame}>
              <div className={styles.placeholder}>
                <span>
                  <Translate id="teamwork.tgp2.trailer.coming" description="TGP II trailer placeholder line">▷ Trailer coming Spring 2027</Translate>
                </span>
              </div>
            </div>
            <p className={styles.description}>
              <Translate id="teamwork.tgp2.description" description="TGP II project description (placeholder)">Coming soon.</Translate>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
