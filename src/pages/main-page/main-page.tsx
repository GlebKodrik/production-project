import React from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALES } from '../../constants/locales';

const MainPage = () => {
  const { t } = useTranslation(LOCALES.MAIN_PAGE);
  return (
    <div>
      {t('title')}
    </div>
  );
};

export default MainPage;
