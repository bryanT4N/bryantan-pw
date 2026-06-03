import React from 'react';
import styles from './Education.module.css';

type EducationProps = {
  img?: string;
  school: string;
  city?: string;
  study: string;
  date: string;
};

export const Education = ({ school, city, study, date }: EducationProps) => {
  return (
    <article className={styles.entry}>
      <h3 className={styles.school}>{school}</h3>
      <div className={styles.degree}>{study}</div>
      <div className={styles.meta}>
        <span>{date}</span>
        {city && <span className={styles.metaSep}> · </span>}
        {city && <span>{city}</span>}
      </div>
    </article>
  );
};
