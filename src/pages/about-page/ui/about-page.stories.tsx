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

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(ETheme.DARK)];
