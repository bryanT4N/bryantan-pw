import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Experience.module.css';

type ExperienceProps = {
  img?: string;
  jobTitle: string;
  company?: string;
  date: string;
  workLength?: number;
  location?: string;
  tasks?: string[];
  techstack?: string[];
};

export const Experience = ({
  img,
  jobTitle,
  company,
  date,
  location,
  tasks,
  techstack,
}: ExperienceProps) => {
  const imgUrl = useBaseUrl(img || '');
  return (
    <article className={styles.entry}>
      {img && (
        <div className={styles.logoWrap}>
          <img src={imgUrl} alt={company || jobTitle} className={styles.logo} loading="lazy" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.jobTitle}>{jobTitle}</h3>
          <span className={styles.dateRight}>{date}</span>
        </div>
        {(company || location) && (
          <div className={styles.subRow}>
            {company && <span className={styles.company}>{company}</span>}
            {location && <span className={styles.city}>{location}</span>}
          </div>
        )}
        {tasks && tasks.length > 0 && (
          <ul className={styles.tasks}>
            {tasks.map((task, i) => (
              <li key={i} className={styles.task}>{task}</li>
            ))}
          </ul>
        )}
        {techstack && techstack.length > 0 && (
          <div className={styles.techstack}>{techstack.join(' · ')}</div>
        )}
      </div>
    </article>
  );
};
