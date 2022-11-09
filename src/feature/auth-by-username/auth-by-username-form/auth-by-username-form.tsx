import React from 'react';

// import cn from 'classnames';
import { TAuthByUsernameProps } from './types';
import { Button } from '../../../shared-components/button';
import { useLanguage } from '../../../hooks/use-language';
import styles from './auth-by-username-form.module.scss';

export const AuthByUsernameForm: React.FC<TAuthByUsernameProps> = () => {
  const { translation } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input} />
      <input type="text" className={styles.input} />
      <div className={styles.submit}>
        <Button color="inverted" variant="outline">{ translation('auth.buttonLogin') }</Button>
      </div>
    </div>
  );
};
