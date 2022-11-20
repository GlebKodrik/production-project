import { addDecorator } from '@storybook/react';
import {
  StyleDecorator,
} from './decorators/style-decorator';
import {
  ThemeDecorator,
} from './decorators/theme-decorator';

import { RouteDecorator } from './decorators/route-decorator';
import { I18NextDecorator } from './decorators/i18next-decorator';
import { THEMES } from '../../src/constants/themes';
import { ReduxProvider } from './decorators/redux-provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(I18NextDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(THEMES.LIGHT));
addDecorator(RouteDecorator);
addDecorator(ReduxProvider);
