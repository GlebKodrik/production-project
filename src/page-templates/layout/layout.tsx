import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import styles from './layout.module.scss';
import { InfiniteScrollProvider } from '../../providers/infinite-scroll-provider';

const Layout: React.FC = () => (
  <>
    <Navbar />
    <div className={styles.contentPage}>
      <Sidebar />
      <InfiniteScrollProvider>
        <div className={styles.pageWrapper}>
          <Outlet />
        </div>
      </InfiniteScrollProvider>

    </div>
  </>
);

export default Layout;
