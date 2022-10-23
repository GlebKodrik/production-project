import { addDecorator } from '@storybook/react';
import {
  StyleDecorator,
} from '../../src/configs/decorators/style-decorator';
import {
  ThemeDecorator,
} from '../../src/configs/decorators/theme-decorator';

import { RouteDecorator } from '../../src/configs/decorators/route-decorator';
import { I18NextDecorator } from '../../src/configs/decorators/i18next-decorator';
import { THEMES } from '../../src/constants/themes';

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
