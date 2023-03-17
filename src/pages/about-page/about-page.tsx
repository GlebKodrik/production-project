import React, { useState } from 'react';
import { LOCALES } from '@/constants/locales';
import { useLanguage } from '@/hooks/use-language';
import Counter from '@/shared-components/counter';
import { Input } from '@/shared-components/input';
import { notificationsActions } from '@/feature/notifications/stores/notifications';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { AddComments } from '@/feature/add-comments';
import { Event } from '../../shared-components/event';

export const AboutPage = () => {
  const { translation } = useLanguage(LOCALES.ABOUT_PAGE);
  const [state, setState] = useState('');
  const dispatch = useAppDispatch();

  const addAlert = () => {
    dispatch(notificationsActions.showNotification(
      { message: 'Как у тебя дела? ewrwer wewr werrwe we', severity: 'error' },
    ));
  };
  return (
    <>
      <Event title="ПРивет" description="Мир" />
      <AddComments onSubmit={() => {}} />
      {translation('about')}
      <button onClick={addAlert}>Добавить алерт</button>
      <Input
        value={state}
        onChange={setState}
        color="secondary"
        label="Введите сообщение"
        variant="plain"
      />
      <Counter />
    </>
  );
};
