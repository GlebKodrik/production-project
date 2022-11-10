import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { TProps } from './types';
import { Button } from '../../../shared-components/button';
import { useLanguage } from '../../../hooks/use-language';
import styles from './auth-by-username-form.module.scss';
import { Input } from '../../../shared-components/input';

export const AuthByUsernameForm: React.FC<TProps> = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { translation } = useLanguage();
  const usernameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameInput?.current?.focus();
  }, []);

  return (
    <form className={styles.wrapper} autoComplete="off">
      <Input
        inputRef={usernameInput}
        value={login}
        onChange={setLogin}
        className={styles.input}
        placeholder={translation('auth.placeholder.username')}
      />
      <Input
        type="password"
        value={password}
        onChange={setPassword}
        className={styles.input}
        placeholder={translation('auth.placeholder.password')}
      />
      <div className={styles.submit}>
        <Button color="inverted" variant="outline" type="submit">{ translation('auth.buttonLogin') }</Button>
      </div>
    </form>
  );
};
