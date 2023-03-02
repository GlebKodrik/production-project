import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AboutPage } from './about-page';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';

export default {
  title: 'page/About',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageThemeLight = Template.bind({});
AboutPageThemeLight.args = {};

export const AboutPageThemeDark = Template.bind({});
AboutPageThemeDark.args = {};
AboutPageThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
