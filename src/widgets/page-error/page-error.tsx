import React from 'react';

import { useTranslation } from 'react-i18next';
import cls from 'classnames';
import styles from './page-error.module.scss';
import { TPageErrorProps } from './types';
import { Button } from '../../shared/ui/button';
import { LOCALES } from '../../constants/locales';

const PageError: React.FC<TPageErrorProps> = ({ className }) => {
  const { t } = useTranslation(LOCALES.ERROR_PAGE);

  const onReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cls(styles.wrapper, className)}>
      <p>{t('errorText')}</p>
      <Button onClick={onReloadPage}>
        {t('reloadPage')}
      </Button>
    </div>
  );
};

export default PageError;
