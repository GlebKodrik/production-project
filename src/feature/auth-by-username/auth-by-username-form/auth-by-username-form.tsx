import React from 'react';

import { useSelector } from 'react-redux';
import { TProps } from './types';
import { Button } from '../../../shared-components/button';
import { useLanguage } from '../../../hooks/use-language';
import styles from './auth-by-username-form.module.scss';
import { Input } from '../../../shared-components/input';
import { getLoginForm } from './stores/login-form';
import { loginFormActions } from './stores/login-form/slices/login-form-slice';
import { requestLoginByUser } from './stores/login-form/requests/request-login-by-user';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';

export const AuthByUsernameForm: React.FC<TProps> = ({
  isOpen,
}) => {
  const dispatch = useAppDispatch();
  const {
    username,
    password,
    isLoading,
  } = useSelector(getLoginForm);
  const { translation } = useLanguage();

  const onUsernameChange = (value: string) => {
    dispatch(loginFormActions.setUsername(value));
  };

  const onPasswordChange = (value: string) => {
    dispatch(loginFormActions.setPassword(value));
  };

  const onHandleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(requestLoginByUser({ username, password }));
  };

  return (
    <>
      <h1 className={styles.title}>{ translation('auth.form.authorization') }</h1>
      <form className={styles.wrapper} autoComplete="off" onSubmit={onHandleSubmit}>
        <Input
          value={username}
          autoFocus={isOpen}
          onChange={onUsernameChange}
          className={styles.input}
          placeholder={translation('auth.placeholder.username')}
        />
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
          className={styles.input}
          placeholder={translation('auth.placeholder.password')}
        />
        <div className={styles.submit}>
          <Button
            color="inverted"
            variant="outline"
            type="submit"
            disabled={isLoading}
          >
            { translation('auth.buttonLogin') }
          </Button>
        </div>
      </form>
    </>

  );
};
