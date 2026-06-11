import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './personal.module.css';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../components/icons';

export default function Personal() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  const resumeUrl = useBaseUrl(
    isEn ? '/files/Bryan_Tan_Resume_2026_en.pdf' : '/files/Bryan_Tan_Resume_2026.pdf'
  );
  // v1.8: 英文页用 SMU 邮箱，中文页保留 gmail
  const email = isEn ? 'bryantan@smu.edu' : 'bry4n.lx.tan@gmail.com';
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
    <Layout
      title={translate({ id: 'page.personal.title', message: '关于', description: 'Personal page <title>' })}
      description={translate({ id: 'page.personal.description', message: '谭磊轩 · 关于', description: 'Personal page meta description' })}>
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>
              <span className={styles.pageTitleMark} aria-hidden="true" />
              <Translate id="page.personal.heading" description="Personal page H1 heading">关于</Translate>
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
                <Translate id="personal.about.name" description="Personal page about-section main name">谭磊轩</Translate>
                {!isEn && (
                  <span className={styles.aboutNameEn}>
                    <Translate id="personal.about.nameEn" description="Personal page about-section subtitle name">Bryan Tan</Translate>
                  </span>
                )}
              </h2>
              <span className={styles.aboutNameMark} aria-hidden="true" />

              <p className={styles.bio}>
                <Translate id="personal.about.bio" description="Personal page about-section bio">
                  SMU Guildhall 交互技术硕士在读，前 4399 游戏策划。参与游戏项目《文明与征服》(2021)。
                </Translate>
              </p>

              <div className={styles.resumeBlock}>
                <h3 className={styles.subTitle}>Resume</h3>
                <p className={styles.resumeMeta}>Last updated 2026-06-03</p>
                <p className={styles.resumeActions}>
                  <a className={styles.action} href={resumeUrl} download>
                    <Translate id="personal.resume.download" description="Personal page resume download link">下载 PDF ↓</Translate>
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* v1.8: Education + Experience 两段先隐藏（恢复时取消注释 + 加回 import：
                import { Education, Experience } from '../components';
                import { education, experience } from '../utils/data';）
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
          */}

          {/* Contact */}
          <section className={styles.section} id="contact">
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionTitleMark} aria-hidden="true" />
              Contact
            </h2>
            <dl className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <dt className={styles.contactIcon} aria-label="Email"><EmailIcon size={28} /></dt>
                <dd className={styles.contactValue}>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt className={styles.contactIcon} aria-label="LinkedIn"><LinkedInIcon size={28} /></dt>
                <dd className={styles.contactValue}>
                  <a href="https://www.linkedin.com/in/bry4ntan/" target="_blank" rel="noopener noreferrer">
                    /in/bry4ntan ↗
                  </a>
                </dd>
              </div>
              <div className={styles.contactItem}>
                <dt className={styles.contactIcon} aria-label="GitHub"><GitHubIcon size={28} /></dt>
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
