import React from 'react';
import { LOCALES } from '@/constants/locales';
import { useLanguage } from '@/hooks/use-language';
import { ListBox } from '../../shared-components/list-box';
import { Popover } from '../../shared-components/popover';

export const MainPage = () => {
  const { translation } = useLanguage(LOCALES.MAIN_PAGE);
  return (
    <div>
      <Popover trigger="Привет">
        Привет мир
      </Popover>
      {translation('title')}
      <ListBox
        size="small"
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
