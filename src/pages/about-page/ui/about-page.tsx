import React from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALES } from '../../../constants/locales';

const AboutPage = () => {
  const { t } = useTranslation(LOCALES.ABOUT_PAGE);
  return (
    <div>
      {t('about')}
    </div>
  );
};

export default AboutPage;
