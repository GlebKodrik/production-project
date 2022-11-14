import React from 'react';
import { TErrorProps } from './types';
import { Button } from '../../../../shared-components/button';
import Code from '../../../../shared-components/code';
import styles from './error.module.scss';
import { ThemeProvider } from '../../../../providers/theme-provider';

import { LOCALES } from '../../../../constants/locales';
import { THEMES } from '../../../../constants/themes';
import { useLanguage } from '../../../../hooks/use-language';

const Error: React.FC<TErrorProps> = ({ error }) => {
  const { translation } = useLanguage(LOCALES.ERROR_PAGE);

  const onReloadPage = () => {
    window.location.reload();
  };

  const onGoBackButtonClick = () => {
    window.history.go(-1);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <ThemeProvider initialTheme={THEMES.DARK}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          {translation('description')}
        </div>

        <div className={styles.code}>
          <Code maxHeight="200px">
            {`${window.location.href} ${error.stack}`}
          </Code>
        </div>

        <div className={styles.buttons}>
          <div className={styles.button}>
            <Button
              variant="outline"
              onClick={onGoBackButtonClick}
            >
              {translation('goBackButton')}
            </Button>
          </div>

          <div className={styles.button}>
            <Button
              onClick={onReloadPage}
              variant="outline"
            >
              {translation('reloadPageButton')}
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Error;
