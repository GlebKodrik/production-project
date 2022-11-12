import React, { useState } from 'react';
import { LOCALES } from '../../constants/locales';
import { useLanguage } from '../../hooks/use-language';
import Counter from '../../shared-components/counter';
import { Input } from '../../shared-components/input';

export const AboutPage = () => {
  const { translation } = useLanguage(LOCALES.ABOUT_PAGE);
  const [state, setState] = useState('');
  return (
    <>
      {translation('about')}
      <Input value={state} onChange={setState} />
      <Counter />
    </>
  );
};
