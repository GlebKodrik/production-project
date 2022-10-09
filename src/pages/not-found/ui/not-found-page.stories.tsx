import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotFound from './not-found';

import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../shared/config/decorators/theme-decorator';

export default {
  title: 'page/Not-found',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

export const NotFoundThemeLight = Template.bind({});
NotFoundThemeLight.args = {
  text: 'Страница не найдена',
};

export const NotFoundThemeDark = Template.bind({});
NotFoundThemeDark.args = {
  text: 'Страница не найдена',
};
NotFoundThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];
