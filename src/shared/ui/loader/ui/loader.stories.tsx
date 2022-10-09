import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './loader';

import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../config/decorators/theme-decorator';

export default {
  title: 'shared/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderWithThemeDark = Template.bind({});
LoaderWithThemeDark.args = {};
LoaderWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const LoaderWithThemeLight = Template.bind({});
LoaderWithThemeLight.args = {};
