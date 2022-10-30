import React from 'react';
import { LOCALES } from '../../constants/locales';
import { useLanguage } from '../../hooks/use-language';

const AboutPage = () => {
  const { translation } = useLanguage(LOCALES.ABOUT_PAGE);
  return (
    <>
      {translation('about')}
    </>
  );
};

export default AboutPage;
