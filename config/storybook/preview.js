import { addDecorator } from '@storybook/react';
import {
  StyleDecorator,
} from '../../src/configs/decorators/style-decorator';
import {
  ThemeDecorator,
} from '../../src/configs/decorators/theme-decorator';
import {
  ETheme,
} from '../../src/context/theme-context';
import { RouteDecorator } from '../../src/configs/decorators/route-decorator';
import { I18NextDecorator } from '../../src/configs/decorators/i18next-decorator';

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
addDecorator(ThemeDecorator(ETheme.LIGHT));
addDecorator(RouteDecorator);
