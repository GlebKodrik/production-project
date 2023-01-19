import React, { useState } from 'react';
import { LOCALES } from 'constants/locales';
import { useLanguage } from 'hooks/use-language';
import Counter from 'shared-components/counter';
import { Input } from 'shared-components/input';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { useAppDispatch } from 'hooks/use-app-dispatch';

export const AboutPage = () => {
  const { translation } = useLanguage(LOCALES.ABOUT);
  const [state, setState] = useState('');
  const dispatch = useAppDispatch();

  const addAlert = () => {
    dispatch(notificationsActions.showNotification(
      { message: 'Как у тебя дела? ewrwer wewr werrwe we', severity: 'error' },
    ));
  };
  return (
    <>
      {translation('about')}
      <button onClick={addAlert}>Добавить алерт</button>
      <Input value={state} onChange={setState} color="secondary" variant="outline" size="extra-large" />
      <Counter />
    </>
  );
};
