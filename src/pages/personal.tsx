import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './personal.module.css';
import { Education, Experience } from '../components';
import { education, experience } from '../utils/data';

export default function Personal() {
  const resumeUrl = useBaseUrl('/files/Bryan_Tan_Resume_2026.pdf');
  // Bryan 后续把真人照保存到 static/img/portrait.png 后会自动作为 background-image 显示，
  // 同时 placeholder "Portrait coming" 自动消失。
  // 图缺失时 (默认) 显示 surface 底色 + placeholder 文案，CSS background-image 不显示 broken icon。
  const portraitUrl = useBaseUrl('/img/portrait.png');
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const img = new Image();
    img.onload = () => setPortraitLoaded(true);
    img.src = portraitUrl;
  }, [portraitUrl]);

  return (
    <Layout title="关于" description="谭磊轩 · 关于">
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              关于
            </h1>
          </header>

          {/* About hero: 左相框 + 右 About + Resume */}
          <section className={styles.aboutHero} id="resume">
            <div className={styles.portrait}>
              <div
                className={styles.portraitFrame}
                style={portraitLoaded ? { backgroundImage: `url(${portraitUrl})` } : undefined}
                role="img"
                aria-label={portraitLoaded ? 'Bryan Tan portrait' : 'Portrait placeholder'}
              >
                {!portraitLoaded && (
                  <span className={styles.portraitPlaceholder} aria-hidden="true">
                    Portrait coming
                  </span>
                )}
              </div>
            </div>

            <div className={styles.aboutContent}>
              <h2 className={styles.aboutName}>
                谭磊轩 <span className={styles.aboutNameEn}>Bryan Tan</span>
              </h2>
              <span className={styles.aboutNameMark} aria-hidden="true" />

              <p className={styles.bio}>
                SMU Guildhall 交互技术硕士在读，前 4399 游戏策划。参与游戏项目《文明与征服》(2021)。
              </p>

              <div className={styles.resumeBlock}>
                <h3 className={styles.subTitle}>Resume</h3>
                <p className={styles.resumeMeta}>Last updated 2026-06-03</p>
                <p className={styles.resumeActions}>
                  <a className={styles.action} href={resumeUrl} download>下载 PDF ↓</a>
                </p>
              </div>
            </div>
          </section>

          {/* Education — v1.5: 单列横排带 logo */}
          <section className={styles.section} id="education">
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleMark} aria-hidden="true" />
              Education
            </h2>
            <div className={styles.entries}>
              {education.map((props, idx) => (
                <Education key={idx} {...props} />
              ))}
            </div>
          </section>

          {/* Experience — v1.5: 单列横排带 logo + tasks 多行 */}
          <section className={styles.section} id="experience">
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleMark} aria-hidden="true" />
              Experience
            </h2>
            <div className={styles.entries}>
              {experience.map((props, idx) => (
                <Experience key={idx} {...props} />
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleMark} aria-hidden="true" />
              Contact
            </h2>
            <dl className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <dt className={styles.contactLabel}>Email</dt>
                <dd className={styles.contactValue}>
                  <a href="mailto:bry4n.lx.tan@gmail.com">bry4n.lx.tan@gmail.com</a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt className={styles.contactLabel}>LinkedIn</dt>
                <dd className={styles.contactValue}>
                  <a href="https://www.linkedin.com/in/bryan-tan-321647389/" target="_blank" rel="noopener noreferrer">
                    /in/bryan-tan ↗
                  </a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt className={styles.contactLabel}>GitHub</dt>
                <dd className={styles.contactValue}>
                  <a href="https://github.com/bryanT4N/" target="_blank" rel="noopener noreferrer">
                    @bryanT4N ↗
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </main>
    </Layout>
  );
}
