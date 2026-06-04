import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './individual.module.css';

export default function IndividualWork() {
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

            <figure className={styles.figure}>
              <div className={styles.placeholder}>
                <span>
                  <Translate id="individual.dfs1.gameplay.placeholder" description="DFS I animated-image placeholder">动图 placeholder</Translate>
                  <br />
                  <Translate id="individual.dfs1.gameplay.coming" description="DFS I gameplay-loop coming line">Gameplay loop coming Fall 2026</Translate>
                </span>
              </div>
              <figcaption className={styles.caption}>
                <Translate id="individual.dfs1.gameplay.caption" description="DFS I gameplay image caption">玩法演示 · Gameplay loop</Translate>
              </figcaption>
            </figure>

            <p className={styles.description}>
              <Translate id="individual.dfs1.description" description="DFS I project description (currently placeholder)">Coming soon.</Translate>
            </p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
