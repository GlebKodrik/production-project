import React from 'react';
import { LOCALES } from 'constants/locales';
import { useLanguage } from 'hooks/use-language';
import { ListBox } from '../../shared-components/list-box';

export const MainPage = () => {
  const { translation } = useLanguage(LOCALES.MAIN_PAGE);
  return (
    <div>
      {translation('title')}
      <ListBox
        items={[{ value: '1', content: '1' },
          { value: '12312', content: 'dasasd', disabled: true },
          { value: '213123', content: '123efdewcwerc' },
        ]}
        defaultValue="Выберите значение"
        onChange={() => {}}
        value={undefined}
      />
    </div>
  );
};
