import React from 'react';
import Layout from '@theme/Layout';
import styles from './individual.module.css';

export default function IndividualWork() {
  return (
    <Layout title="个人作品" description="谭磊轩 · 个人作品">
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              个人作品
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

            <p className={styles.description}>Coming soon.</p>
          </article>
        </div>
      </main>
    </Layout>
  );
}
