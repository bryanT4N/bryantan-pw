import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Typewriter from '../components/Typewriter';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../components/icons';

function HomepageHero() {
  const heroRef = useRef(null);
  const heroImgUrl = useBaseUrl('/img/hero.png');
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  const resumeUrl = useBaseUrl(
    isEn ? '/files/Bryan_Tan_Resume_2026_en.pdf' : '/files/Bryan_Tan_Resume_2026.pdf'
  );
  const email = isEn ? 'bryantan@smu.edu' : 'bry4n.lx.tan@gmail.com';
  // 中文每个字信息量比英文字母大，逐字打字调慢一些
  const nameTypingSpeedMs = isEn ? 55 : 120;
  const bioTypingSpeedMs = isEn ? 37 : 80;
  // hero 4 个组件浮现延迟，分语言两套（顺序：LinkedIn / GitHub / Email / My Resume）
  const revealDelaysMs = isEn
    ? [350, 1050, 1750, 3250]
    : [100, 800, 1500, 3000];
  // Hero name + bio type out in sequence: name first, then the two bio sentences.
  // The single caret stays at the name's end until the bio types its first char.
  const [nameDone, setNameDone] = useState(false);
  const [bioStarted, setBioStarted] = useState(false);
  const heroName = translate({
    id: 'hero.name',
    description: 'Hero main heading (the name)',
    message: '谭磊轩',
  });
  // Reuse the existing hero.bio i18n key; split its two sentences for the typewriter.
  const bioLines = translate(
    {
      id: 'hero.bio',
      description: 'Hero short bio',
      message: '系统/战斗策划，兴趣使然的游戏开发者。{br}关注 RPG 与互动叙事。',
    },
    { br: '\n' }
  ).split('\n');

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
              <Typewriter lines={[heroName]} typingSpeedMs={nameTypingSpeedMs} startDelayMs={0} showCursor={!bioStarted} onDone={() => setNameDone(true)} />
            </h1>
            <p className={styles.bio}>
              <Typewriter
                lines={bioLines}
                start={nameDone}
                typingSpeedMs={bioTypingSpeedMs}
                linePauseMs={500}
                startDelayMs={1000}
                onStart={() => setBioStarted(true)}
              />
            </p>
            <nav className={styles.heroLinks} aria-label="Site links">
              <ul className={styles.linksRow}>
                <li className={styles.revealItem} style={{ animationDelay: `${revealDelaysMs[0]}ms` }}>
                  <a className={styles.iconLink} href="https://www.linkedin.com/in/bry4ntan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LinkedInIcon size={30} />
                  </a>
                </li>
                <li className={styles.revealItem} style={{ animationDelay: `${revealDelaysMs[1]}ms` }}>
                  <a className={styles.iconLink} href="https://github.com/bryanT4N/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon size={30} />
                  </a>
                </li>
                <li className={styles.revealItem} style={{ animationDelay: `${revealDelaysMs[2]}ms` }}>
                  <a className={styles.iconLink} href={`mailto:${email}`} aria-label="Email">
                    <EmailIcon size={30} />
                  </a>
                </li>
                <li className={`${styles.resumeItem} ${styles.revealItem}`} style={{ animationDelay: `${revealDelaysMs[3]}ms` }}>
                  <a className={styles.resumeLink} href={`${resumeUrl}#navpanes=0`} target="_blank" rel="noopener noreferrer">
                    <Translate id="hero.links.resume" description="Hero link to resume PDF">个人简历</Translate>
                  </a>
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
