import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './loader';

import { ThemeDecorator } from '../../decorators/theme-decorator';
import { THEMES } from '../../constants/themes';

export default {
  title: 'shared-components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderWithThemeDark = Template.bind({});
LoaderWithThemeDark.args = {};
LoaderWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const LoaderWithThemeLight = Template.bind({});
LoaderWithThemeLight.args = {};
