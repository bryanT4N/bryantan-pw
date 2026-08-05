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
import { Education, Experience } from '../components';
import { education, experience } from '../utils/data';

function HomepageHero() {
  const heroRef = useRef(null);
  const heroImgUrl = useBaseUrl('/img/hero.png');
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  const resumeUrl = useBaseUrl(
    isEn ? '/files/Bryan_Tan_Resume_2026_en.pdf' : '/files/Bryan_Tan_Resume_2026.pdf'
  );
  const email = 'bryantan@foxmail.com';
  const portraitUrl = useBaseUrl('/img/portrait.png');
  // 中文每个字信息量比英文字母大，逐字打字调慢一些
  const nameTypingSpeedMs = isEn ? 55 : 333;
  const bioTypingSpeedMs = isEn ? 37 : 35;
  // hero 4 个组件浮现延迟，分语言两套（顺序：LinkedIn / GitHub / Email / My Resume）
  const revealDelaysMs = isEn
    ? [350, 1050, 1750, 3250, 3800]
    : [100, 800, 1500, 2200, 2900];
  const linePauseMs = 500;
  const nameCaretLingerMs = 1450;
  // The caret restarts its blink on every character, so a parked caret runs tw-blink from
  // the top: lit 0-500ms, dark 500-1000ms. Handing over just inside the dark half spends
  // one whole blink and leaves no clipped sliver of a second one.
  const nameToBioPauseMs = 970;
  // Only the zh bio starts before the name finishes, so only there do both carets show
  // and the name's linger past its last character. The en bio still waits for the name,
  // and keeps the original single caret handed over the moment the bio starts.
  const [nameDone, setNameDone] = useState(false);
  const [nameCaretHeld, setNameCaretHeld] = useState(!isEn);
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
      message: '游戏策划，兴趣使然的开发者，SMU Guildhall 交互技术硕士在读。{br}参与过游戏项目《文明与征服》(2021)。{br}杂食玩家，十年老书虫。最喜欢的游戏是《博德之门3》和宝可梦 Gen5 Gen6。最近在学习打街霸 :(',
    },
    { br: '\n' }
  ).split('\n');

  useEffect(() => {
    if (isEn || !nameDone) return undefined;
    // onDone lands one typing interval past the final character; drop that interval
    // so the linger is measured from when the last character actually appeared.
    const held = Math.max(0, nameCaretLingerMs - nameTypingSpeedMs);
    const timer = setTimeout(() => setNameCaretHeld(false), held);
    return () => clearTimeout(timer);
  }, [isEn, nameDone, nameTypingSpeedMs]);

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
          <div className={styles.heroBottomFade} />
        </div>
        <div className={isEn ? styles.heroInnerEn : styles.heroInner}>
          {!isEn && (
            <div className={styles.heroPortraitWrap}>
              <img src={portraitUrl} alt="Bryan Tan" className={styles.heroPortrait} loading="eager" />
            </div>
          )}
          <div className={isEn ? styles.heroTextEn : styles.heroText}>
            <h1 className={styles.name}>
              <Typewriter lines={[heroName]} typingSpeedMs={nameTypingSpeedMs} startDelayMs={0} showCursor={nameCaretHeld || !bioStarted} onDone={() => setNameDone(true)} />
            </h1>
            <p className={styles.bio}>
              <Typewriter
                lines={bioLines}
                start={isEn ? nameDone : true}
                typingSpeedMs={bioTypingSpeedMs}
                linePauseMs={linePauseMs}
                lineGap="1rem"
                startDelayMs={isEn ? Math.max(0, nameToBioPauseMs - nameTypingSpeedMs) : nameTypingSpeedMs}
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
                  {!isEn && (
                    <span className={styles.revealItem} style={{ animationDelay: `${revealDelaysMs[4]}ms` }}>
                      <span className={styles.linkSep}> </span>
                      <a className={styles.portfolioLink} href={useBaseUrl('/portfolio/')} target="_blank" rel="noopener noreferrer">
                        <Translate id="hero.links.portfolio" description="Hero link to portfolio single page">查看作品集(单页) →</Translate>
                      </a>
                    </span>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {!isEn && (
          <div className={styles.bgContainer}>
            <section className={styles.bgBlock}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionTitleMark} aria-hidden="true" />
                <Translate id="home.experience.title" description="Homepage experience section title">工作经历</Translate>
              </h2>
              <div className={styles.bgEntries}>
                {experience.map((props, idx) => (
                  <Experience key={idx} {...props} />
                ))}
              </div>
            </section>
            <section className={styles.bgBlock}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionTitleMark} aria-hidden="true" />
                <Translate id="home.education.title" description="Homepage education section title">教育经历</Translate>
              </h2>
              <div className={styles.bgEntries}>
                {education.map((props, idx) => (
                  <Education key={idx} {...props} />
                ))}
              </div>
            </section>
          </div>
        )}
        <div className={styles.projectsWrap}>
          <HomepageFeatures />
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  return (
    <Layout
      title={translate({ id: 'page.home.title', message: 'Home', description: 'Homepage <title>' })}
      description={translate({
        id: 'page.home.description',
        message: '谭磊轩 Bryan Tan — 游戏策划，兴趣使然的开发者，关注 RPG 和互动叙事研究。',
        description: 'Homepage meta description',
      })}>
      <HomepageHero />
      <main />
    </Layout>
  );
}
