import React from 'react';
import { experienceStyles } from '../css/experience';
import { TechStacks } from '.';

export const Experience = ({
  img,
  jobTitle,
  company,
  date,
  workLength,
  location,
  tasks,
  techstack,
}) => {
  const classes = experienceStyles();
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.fullWidth}>
            {img ? (<div className={classes.imgContainer}><img alt={company} src={img} className={classes.img} /></div>) : (<></>)}
            <div className={classes.companyContainer}>
              <div className={classes.flex}>
                {company ? (<div className={classes.company}>{company}</div>) : (<></>)}
                {location ? (<div className={classes.city}>{location}&emsp;&emsp;</div>) : (<></>)}
              </div>
              <div className={classes.flex}>
                <h3 className={classes.jobTitle}>{jobTitle}</h3>
                <h4 className={classes.flexDate}>{date}&emsp;&emsp;</h4>
              </div>
            </div>
            <div className={classes.information}>
              {tasks.map(task => {
                return (
                  <>
                    &nbsp;&nbsp;▪&nbsp;&nbsp;{task} <br />
                  </>
                );
              })}
              {techstack ? (<TechStacks stack={techstack} />) : (<></>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
