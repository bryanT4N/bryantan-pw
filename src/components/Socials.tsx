import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import Icon from '@mui/material/Icon';

const socialDetails = [
  // {
  //   name: 'linkedin',
  //   classname: 'fab fa-linkedin fa-fw',
  //   link: 'https://www.linkedin.com/in/yourname/',
  // },
  {
    name: 'github',
    classname: 'fab fa-github fa-fw',
    link: 'https://github.com/bryanT4N',
  },
];

const getHoverIconColor = (site: string): string => {
  switch (site) {
    // case 'linkedin':
    //   return '#0a66c2';
    case 'github':
      return 'blue';
    default:
      return 'blue';
  }
};

export const Socials = () => {
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChild(node);
      }
    };
  }, []);

  return (
    <div>
      {socialDetails.map(cn => {
        return (
          <a
            href={cn.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cn.classname}
          >
            <Icon
              className={cn.classname}
              sx={{
                fontSize: 30,
                marginTop: 1,
                marginRight: 1,
                '&:hover': {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
};
