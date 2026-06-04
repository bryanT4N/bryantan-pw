import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Education.module.css';

type EducationProps = {
  img?: string;
  school: string;
  city?: string;
  study: string;
  date: string;
};

export const Education = ({ img, school, city, study, date }: EducationProps) => {
  const imgUrl = useBaseUrl(img || '');
  return (
    <article className={styles.entry}>
      {img && (
        <div className={styles.logoWrap}>
          <img src={imgUrl} alt={school} className={styles.logo} loading="lazy" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.school}>{school}</h3>
          <span className={styles.dateRight}>{date}</span>
        </div>
        <div className={styles.subRow}>
          <span className={styles.degree}>{study}</span>
          {city && <span className={styles.city}>{city}</span>}
        </div>
      </div>
    </article>
  );
};
