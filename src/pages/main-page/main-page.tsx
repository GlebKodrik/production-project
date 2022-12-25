import React from 'react';
import { LOCALES } from '@constants/locales';
import { useLanguage } from '@hooks/use-language';

export const MainPage = () => {
  const { translation } = useLanguage(LOCALES.MAIN_PAGE);
  return (
    <div>
      {translation('title')}
    </div>
  );
};
