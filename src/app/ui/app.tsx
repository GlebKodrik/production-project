import React, { Suspense, useState } from 'react';
import cls from 'classnames';
import useTheme from '../provider/theme-provider/lib/use-theme';
import { AppRouter } from '../provider/routes/ui';
import { Navbar } from '../../widgets/navbar';
import { Sidebar } from '../../widgets/sidebar';
import '../../shared/config/i18next/i18next';
import PageLoader from '../../widgets/page-loader';
import Modal from '../../shared/ui/modal';

const App: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cls('app', theme)}>
      <Modal open={isOpen} onClose={setIsOpen}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi assumenda autem corporis cumque dolor, dolorem, fuga in iste iusto nemo quod rem. Ab, at commodi dolorum eos illo, omnis pariatur praesentium quaerat quasi quia ratione, recusandae tempore voluptas voluptatem voluptatibus! Animi corporis cupiditate deleniti doloribus earum eum expedita, illo iste magni, nam odio, voluptatibus? Architecto aut deserunt ea est impedit, inventore ipsam labore laborum minus, mollitia nostrum officiis praesentium repellat temporibus voluptate! Animi commodi dicta eaque iste maiores maxime nesciunt nulla officiis repellat rerum? Ab consequuntur earum eligendi, magnam nihil nisi pariatur, porro quaerat repellendus sed ullam veniam voluptatibus!
      </Modal>
      <button onClick={() => setIsOpen(true)}>Toggle</button>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className={cls('content-page')}>
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
