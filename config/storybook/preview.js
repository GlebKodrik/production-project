import { addDecorator } from '@storybook/react';
import {
  StyleDecorator,
} from '../../src/shared/config/decorators/style-decorator';
import {
  ThemeDecorator,
} from '../../src/shared/config/decorators/theme-decorator';
import {
  ETheme,
} from '../../src/app/provider/theme-provider/config/theme-context';
import { RouteDecorator } from '../../src/shared/config/decorators/route-decorator';
import { I18NextDecorator } from '../../src/shared/config/decorators/i18next-decorator';

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
