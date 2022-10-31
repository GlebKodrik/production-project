import { Story } from '@storybook/react';

import { ThemeProvider } from '../../providers/theme-provider';
import { TThemes } from '../../types/themes';

export const ThemeDecorator = (theme: TThemes) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <StoryComponent />
  </ThemeProvider>

);
