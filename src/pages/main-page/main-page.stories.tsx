import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './main-page';

import {
  ETheme,
} from '../../context/theme-context';
import { ThemeDecorator } from '../../configs/decorators/theme-decorator';

export default {
  title: 'page/Main',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageThemeLight = Template.bind({});
MainPageThemeLight.args = {};

export const MainPageThemeDark = Template.bind({});
MainPageThemeDark.args = {};
MainPageThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];
