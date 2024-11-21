import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { educationStyles } from '../css/education';

export const Education = ({ img, school, city, study, date }) => {
  const classes = educationStyles();
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.fullWidth}>
            <div className={classes.imgContainer}>
              <img alt={school} src={img} className={classes.img} />
            </div>
            <div className={classes.schoolContainer}>
              <div className={classes.flex}>
                {school ? (<div className={classes.schoolTitle}>{school}</div>) : (<></>)}
                {city ? (<div className={classes.city}>{city}&emsp;&emsp;</div>) : (<></>)}
              </div>
              <div className={classes.flex}>
                <div className={classes.degree}>{study}</div>
                <h4 className={classes.flexDate}>{date}&emsp;&emsp;</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
