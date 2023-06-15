import React from 'react';
import Link from 'next/link';

import AboutCard from './AboutCard';
import styles from '../styles/AboutPage.module.css';

const AboutLanguages = ({ data }) => {
  return (
    <AboutCard title={data.title}>
    <div className={styles.holding}>
    <div className={styles.leftColumn}>
      <ul style={{ marginLeft: '1rem' }} className={styles.code}>
        {data.links.slice(0, 7).map((link) => (
          <li key={link.name}>
                {link.name}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.rightColumn}>
    {data.links.length > 7 && (<ul>
    {data.links.slice(7).map((link) => (
      <li key={link.name}>{link.name}</li>
    ))}
    </ul>)}
    </div>
    </div>
    </AboutCard>

  );
};

export default AboutLanguages;