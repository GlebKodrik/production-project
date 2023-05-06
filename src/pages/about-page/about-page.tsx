import React, { useState } from 'react';
import { LOCALES } from '@/constants/locales';
import { useLanguage } from '@/hooks/use-language';
import Counter from '@/shared-components/counter';
import { Input } from '@/shared-components/input';
import { notificationsActions } from '@/feature/notifications/stores/notifications';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { AddComments } from '@/feature/add-comments';
import { RatingCard } from '@/shared-components/rating-card';

export const AboutPage = () => {
  const [star, setStar] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { translation } = useLanguage(LOCALES.ABOUT_PAGE);
  const [state, setState] = useState('');
  const dispatch = useAppDispatch();

  const onChangeStar = (starId: number) => {
    setIsOpen(true);
    setStar(starId);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const addAlert = () => {
    dispatch(notificationsActions.showNotification(
      { message: 'Как у тебя дела? ewrwer wewr werrwe we', severity: 'error' },
    ));
  };
  return (
    <>
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
      <RatingCard
        selectStar={star}
        onSelect={onChangeStar}
        isOpen={isOpen}
        onClose={onCloseModal}
        onSubmit={() => {}}
        onChangeFeedback={() => {}}
        feedback="s"
      />
    </>
  );
};
