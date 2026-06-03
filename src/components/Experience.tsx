import React from 'react';
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
  jobTitle,
  company,
  date,
  location,
  tasks,
  techstack,
}: ExperienceProps) => {
  return (
    <article className={styles.entry}>
      <h3 className={styles.jobTitle}>{jobTitle}</h3>
      {company && <div className={styles.company}>{company}</div>}
      <div className={styles.meta}>
        <span>{date}</span>
        {location && <span className={styles.metaSep}> · </span>}
        {location && <span>{location}</span>}
      </div>
      {tasks && tasks.length > 0 && (
        <p className={styles.description}>{tasks.join(' ')}</p>
      )}
      {techstack && techstack.length > 0 && (
        <div className={styles.techstack}>{techstack.join(' · ')}</div>
      )}
    </article>
  );
};
