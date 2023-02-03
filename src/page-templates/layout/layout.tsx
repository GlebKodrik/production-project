import React, { UIEvent } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import styles from './layout.module.scss';

const Layout: React.FC = () => {
  const onScroll = (event: UIEvent<HTMLElement>) => {
    console.log('Scroll: ', event.currentTarget.scrollTop);
  };

  return (
    <>
      <Navbar />
      <div className={styles.contentPage}>
        <Sidebar />
        <div className={styles.pageWrapper} id="scrollableDiv" onScroll={onScroll}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
