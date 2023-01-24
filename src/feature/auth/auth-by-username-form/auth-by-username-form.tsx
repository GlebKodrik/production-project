import React from 'react';

import { useSelector } from 'react-redux';
import { Button } from 'shared-components/button';
import { useLanguage } from 'hooks/use-language';
import { Input } from 'shared-components/input';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { getPassword } from './stores/login-form/selectors/get-password';
import { getIsLoading } from './stores/login-form/selectors/get-is-loading';
import { getUsername } from './stores/login-form/selectors/get-username';
import { TInputValue, TProps } from './types';
import styles from './auth-by-username-form.module.scss';
import { loginFormActions } from './stores/login-form/login-form-slice';
import { requestLoginByUser } from './stores/login-form/requests/request-login-by-user';
import { authYupScheme } from './validation-auth';

export const AuthByUsernameForm: React.FC<TProps> = ({
  isOpen,
}) => {
  const dispatch = useAppDispatch();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getIsLoading);
  const { translation } = useLanguage();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TInputValue>({
    resolver: yupResolver(authYupScheme()),
    mode: 'onChange',
    defaultValues: {
      username,
      password,
    },
  });
  const onUsernameChange = (value: string) => {
    setValue('username', value, { shouldValidate: true });
    dispatch(loginFormActions.setUsername(value));
  };

  const onPasswordChange = (value: string) => {
    setValue('password', value, { shouldValidate: true });
    dispatch(loginFormActions.setPassword(value));
  };

  const onHandleSubmit = () => {
    dispatch(requestLoginByUser({ username, password }));
  };

  return (
    <>
      <h1 className={styles.title}>{ translation('auth.form.authorization') }</h1>
      <form className={styles.wrapper} autoComplete="off" onSubmit={handleSubmit(onHandleSubmit)}>
        <Input
          name="username"
          value={username}
          autoFocus={isOpen}
          onChange={onUsernameChange}
          className={styles.input}
          placeholder={translation('auth.placeholder.username')}
          error={errors.username?.message}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          className={styles.input}
          placeholder={translation('auth.placeholder.password')}
          error={errors.password?.message}
        />
        <div className={styles.submit}>
          <Button
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
