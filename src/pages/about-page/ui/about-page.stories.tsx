import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutPage from './about-page';

import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../shared/config/decorators/theme-decorator';

export default {
  title: 'page/About',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageThemeLight = Template.bind({});
AboutPageThemeLight.args = {};

export const AboutPageThemeDark = Template.bind({});
AboutPageThemeDark.args = {};
AboutPageThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];
