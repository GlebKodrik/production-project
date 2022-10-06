import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeSwitcher } from './theme-switcher';

import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../config/decorators/theme-decorator';

export default {
  title: 'shared/ThemeSwitcherLight',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherDark = Template.bind({});
ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const ThemeSwitcherLight = Template.bind({});
ThemeSwitcherLight.args = {};
