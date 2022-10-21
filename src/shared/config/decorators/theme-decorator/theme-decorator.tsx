import { Story } from '@storybook/react';
import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';
import { ThemeProvider } from '../../../../app/provider/theme-provider/ui';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
  <ThemeProvider theme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>

);
