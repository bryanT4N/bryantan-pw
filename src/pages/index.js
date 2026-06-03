import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHero() {
  const heroRef = useRef(null);
  const heroImgUrl = useBaseUrl('/img/hero.png');

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
              谭磊轩 <span className={styles.nameEn}>Bryan Tan</span>
            </h1>
            <p className={styles.bio}>
              前 4399 战斗系统策划，现 SMU Guildhall 交互技术硕士。关注玩家手感、数值反馈与可玩性结构。
            </p>
            <nav className={styles.heroLinks} aria-label="Site sections">
              <ul className={styles.linksRow}>
                <li><a href="/individual">个人作品</a></li>
                <li><span className={styles.sep} aria-hidden="true">·</span></li>
                <li><a href="/teamwork">团队作品</a></li>
                <li><span className={styles.sep} aria-hidden="true">·</span></li>
                <li><a href={useBaseUrl('/files/Bryan_Tan_Resume_2026.pdf')} download>简历 ↓</a></li>
                <li><span className={styles.sep} aria-hidden="true">·</span></li>
                <li><a href="https://www.linkedin.com/in/bryan-tan-321647389/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                <li><span className={styles.sep} aria-hidden="true">·</span></li>
                <li><a href="https://github.com/bryanT4N/" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
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
    <Layout title="Home" description="谭磊轩 Bryan Tan — 技术策划 · 战斗 / 系统设计">
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
