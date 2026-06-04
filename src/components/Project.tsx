import React from 'react';
import Translate from '@docusaurus/Translate';
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
        <p className={styles.description}>{description}</p>
        {/* v1.5 footer: 左 查看 / 右 tags 同行；只有一侧也对齐 */}
        {(link || (techstack && techstack.length > 0)) && (
          <div className={styles.footer}>
            <span className={styles.footerLink}>
              {link && (
                <a
                  className={styles.link}
                  href={link}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Translate id="project.card.viewLink" description="Project card view-detail link label">查看 →</Translate>
                </a>
              )}
            </span>
            {techstack && techstack.length > 0 && (
              <span className={styles.meta}>{techstack.join(' · ')}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
