import React from 'react';
import { LOCALES } from '../../constants/locales';
import { useLanguage } from '../../hooks/use-language';
import Counter from '../../shared-components/counter';

const AboutPage = () => {
  const { translation } = useLanguage(LOCALES.ABOUT_PAGE);
  return (
    <>
      {translation('about')}
      <Counter />
    </>
  );
};

export default AboutPage;
