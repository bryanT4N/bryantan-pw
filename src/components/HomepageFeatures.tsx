import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './HomepageFeatures.module.css';
import { Project } from '.';
import { projects } from '../utils/data';

export default function HomepageFeatures() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleMark} aria-hidden="true" />
          <Translate id="home.projects.title" description="Homepage projects section title">近期项目</Translate>
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
