import React, {
  UIEvent,
} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import styles from './layout.module.scss';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getScroll, scrollActions } from '../../feature/infinite-scroll/stores/scroll';
import { useThrottling } from '../../hooks/use-throttling';

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const scroll = useSelector(getScroll);
  const { pathname } = useLocation();

  const onScroll = useThrottling((event: UIEvent<HTMLElement>) => {
    if (pathname in scroll) {
      dispatch(scrollActions.setScrollPosition({
        path: pathname,
        position: event.currentTarget.scrollTop,
      }));
    }
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
