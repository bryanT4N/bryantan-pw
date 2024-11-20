import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ButtonBase from '@mui/material/ButtonBase';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '../components/HomepageFeatures';
import { Socials } from '../components';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.bannerWrap}>
      <div className="container" style={{ width: 996 }}>
      <div className="row">
        <div className="col col--offset-1 col--11">
          <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
              <Grid container spacing={2}>
                <Grid item xs={{ display: 'flex' }}>
                  <ButtonBase>
                    <Avatar alt="Leixuan Tan" src={useBaseUrl('/img/Linoone_B_512.png')} sx={{ width: 132, height: 132, m: 1, ml:-2 }} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={1}>
                    <Grid item xs={{ display: 'flex' }}>
                    </Grid>
                    <Grid item xs={{ display: 'flex' }}>
                    </Grid>
                    <Grid item xs container direction="row" spacing={1}>
                      <Grid item xs={{ display: 'flex' }}>
                        <h1 className="hero__title">{siteConfig.title} </h1>
                      </Grid>
                      {/* <Grid item xs={{ display: 'flex' }}>
                  <Socials/>
                </Grid> */}
                    </Grid>
                    <Grid item xs={{ display: 'flex' }}>
                      <p className="hero__subtitle">{siteConfig.tagline}</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </header>
        </div>
      </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Personal website of Leixuan (Bryan) Tan">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
