import React from 'react';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.card}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
