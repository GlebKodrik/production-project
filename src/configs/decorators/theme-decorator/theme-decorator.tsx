import { Story } from '@storybook/react';
import {
  ETheme,
} from '../../../context/theme-context';
import { ThemeProvider } from '../../../providers/theme-provider';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
  <ThemeProvider theme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>

);
