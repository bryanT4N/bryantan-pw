import React from 'react';
import styles from './HomepageFeatures.module.css';
import { PersonalTabs, EducationTabs, ExperienceTabs, ProjectsTabs } from './Tabs';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{width:996}}>
        <div className="row">
          <div className="col col--offset-1 col--11">
            <EducationTabs/>
            <ExperienceTabs/>
            <ProjectsTabs/>
          </div>
        </div>
      </div>
    </section>
  );
}
