import { Story } from '@storybook/react';

import { ThemeProvider } from '../../../providers/theme-provider';
import { TThemes } from '../../../constants/themes';

export const ThemeDecorator = (theme: TThemes) => (StoryComponent: Story) => (
  <ThemeProvider theme={theme}>
    <StoryComponent />
  </ThemeProvider>

);
