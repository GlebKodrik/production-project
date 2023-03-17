import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from '@/constants/themes';
import { ThemeSwitcher } from './theme-switcher';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';

export default {
  title: 'shared-components/Theme-switcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherWithThemeDark = Template.bind({});
ThemeSwitcherWithThemeDark.args = {};
ThemeSwitcherWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const ThemeSwitcherWithThemeLight = Template.bind({});
ThemeSwitcherWithThemeLight.args = {};
