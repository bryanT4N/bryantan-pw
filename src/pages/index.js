import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { GitHubIcon, LinkedInIcon } from '../components/icons';

function HomepageHero() {
  const heroRef = useRef(null);
  const heroImgUrl = useBaseUrl('/img/hero.png');
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  const resumeUrl = useBaseUrl(
    isEn ? '/files/Bryan_Tan_Resume_2026_en.pdf' : '/files/Bryan_Tan_Resume_2026.pdf'
  );

  // Mouse parallax — hover-capable devices only, 温和 ±3px / ±2px, rAF-throttled
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
        hero.style.setProperty('--mouse-x', x.toFixed(2));
        hero.style.setProperty('--mouse-y', y.toFixed(2));
      });
    };
    const onLeave = () => {
      hero.style.setProperty('--mouse-x', '0');
      hero.style.setProperty('--mouse-y', '0');
    };
    hero.addEventListener('mousemove', onMove, { passive: true });
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Head>
        {/* v1.7.4: per-locale Home tab title — zh-cn 默认 "谭磊轩"，en 走 i18n 翻译 "Bryan Tan" */}
        <title>{translate({ id: 'page.home.tabTitle', message: '谭磊轩', description: 'Browser tab title for Home page' })}</title>
        <link rel="preload" as="image" href={heroImgUrl} fetchpriority="high" />
      </Head>
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true">
          <img
            src={heroImgUrl}
            alt=""
            className={styles.heroIllustration}
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <div className={styles.heroBottomFade} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>
              <Translate id="hero.name" description="Hero main heading (the name)">谭磊轩</Translate>
            </h1>
            <p className={styles.bio}>
              <Translate id="hero.bio" description="Hero short bio" values={{ br: <br /> }}>
                {'系统/战斗策划，兴趣使然的游戏开发者。{br}关注 RPG 与互动叙事。'}
              </Translate>
            </p>
            <nav className={styles.heroLinks} aria-label="Site links">
              <ul className={styles.linksRow}>
                <li>
                  <a className={styles.iconLink} href="https://www.linkedin.com/in/bry4ntan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon size={30} />
                  </a>
                </li>
                <li>
                  <a className={styles.iconLink} href="https://github.com/bryanT4N/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon size={30} />
                  </a>
                </li>
                <li className={styles.resumeItem}>
                  <a href={resumeUrl} download><Translate id="hero.links.resume" description="Hero link to resume PDF">个人简历 ↓</Translate></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({ id: 'page.home.title', message: 'Home', description: 'Homepage <title>' })}
      description={translate({
        id: 'page.home.description',
        message: '谭磊轩 Bryan Tan — 系统/战斗策划，关注 RPG 和互动叙事研究。',
        description: 'Homepage meta description',
      })}>
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
