import React, {
  UIEvent,
} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import styles from './layout.module.scss';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { scrollActions } from '../../redux-stores/stores/scroll';
import { useThrottling } from '../../hooks/use-throttling';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const locations = useLocation();

  const onScroll = useThrottling((event: UIEvent<HTMLElement>) => {
    dispatch(scrollActions.setScrollPosition({
      path: locations.pathname,
      position: event.currentTarget.scrollTop,
    }));
  });

  return (
    <>
      <Navbar />
      <div className={styles.contentPage}>
        <Sidebar />
        <div
          className={styles.pageWrapper}
          id="scrollableDiv"
          onScroll={onScroll}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
