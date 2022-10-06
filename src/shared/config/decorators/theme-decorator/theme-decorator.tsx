import { Story } from '@storybook/react';
import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
