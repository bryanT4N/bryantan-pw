import React from 'react';
import styles from './HomepageFeatures.module.css';
import { Project } from '.';
import { projects } from '../utils/data';

export default function HomepageFeatures() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionTitleMark} aria-hidden="true" />
          Projects
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
