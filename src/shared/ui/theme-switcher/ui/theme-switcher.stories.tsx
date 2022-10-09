import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSwitcher } from './theme-switcher';

import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../config/decorators/theme-decorator';

export default {
  title: 'shared/Theme-switcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherWithThemeDark = Template.bind({});
ThemeSwitcherWithThemeDark.args = {};
ThemeSwitcherWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const ThemeSwitcherWithThemeLight = Template.bind({});
ThemeSwitcherWithThemeLight.args = {};
