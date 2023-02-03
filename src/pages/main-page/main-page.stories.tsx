import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPage } from './main-page';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';

export default {
  title: 'scroll-to-top/Main',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageThemeLight = Template.bind({});
MainPageThemeLight.args = {};

export const MainPageThemeDark = Template.bind({});
MainPageThemeDark.args = {};
MainPageThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
