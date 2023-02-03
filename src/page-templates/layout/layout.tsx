import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import styles from './layout.module.scss';

const Layout: React.FC = () => (
  <>
    <Navbar />
    <div className={styles.contentPage}>
      <Sidebar />
      <div className={styles.pageWrapper} id="scrollableDiv">
        <Outlet />
      </div>
    </div>
  </>
);

export default Layout;
