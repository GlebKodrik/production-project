import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'configs/i18next';

export const I18NextDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
      <StoryComponent />
    </I18nextProvider>
);
