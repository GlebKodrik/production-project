import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './main-page';

import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../shared/config/decorators/theme-decorator';

export default {
  title: 'page/Main',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const MainPageThemeLight = Template.bind({});
MainPageThemeLight.args = {};

export const MainPageThemeDark = Template.bind({});
MainPageThemeDark.args = {};
MainPageThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];
