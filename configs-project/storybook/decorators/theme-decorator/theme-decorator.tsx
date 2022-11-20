import { Story } from '@storybook/react';

import { ThemeProvider } from '../../../../src/providers/theme-provider';
import { TThemes } from '../../../../src/types/themes';

export const ThemeDecorator = (theme: TThemes) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <StoryComponent />
  </ThemeProvider>

);
