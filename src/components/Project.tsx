import React from 'react';
import styles from './Project.module.css';

type ProjectProps = {
  img?: string;
  title: string;
  description: string;
  codeLink?: string;
  liveLink?: string;
  techstack?: string[];
  status?: string;          // placeholder 用，如 "in proposal" / "upcoming"
  detailLink?: string;      // 内部跳转（覆盖默认 codeLink/liveLink 选择）
};

export const Project = ({
  img,
  title,
  description,
  codeLink,
  liveLink,
  techstack,
  status,
  detailLink,
}: ProjectProps) => {
  const link = detailLink || liveLink || codeLink;
  const isExternal = !!link && /^https?:\/\//.test(link);

  return (
    <article className={styles.card}>
      {img ? (
        <div className={styles.imgContainer}>
          <img src={img} className={styles.img} alt={title} />
        </div>
      ) : (
        <div className={styles.imgPlaceholder}>
          <span>{status || 'Coming soon'}</span>
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {techstack && techstack.length > 0 && (
          <div className={styles.meta}>{techstack.join(' · ')}</div>
        )}
        <p className={styles.description}>{description}</p>
        {link && (
          <a
            className={styles.link}
            href={link}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            查看 →
          </a>
        )}
      </div>
    </article>
  );
};
