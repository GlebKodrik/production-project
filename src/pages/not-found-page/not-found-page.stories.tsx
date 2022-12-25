import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from '@constants/themes';
import { NotFoundPage } from './not-found-page';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';

export default {
  title: 'page/Not-found',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const NotFoundThemeLight = Template.bind({});
NotFoundThemeLight.args = {
  text: 'Страница не найдена',
};

export const NotFoundThemeDark = Template.bind({});
NotFoundThemeDark.args = {
  text: 'Страница не найдена',
};
NotFoundThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
