import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';

import { ThemeDecorator } from '../../../../decorators/theme-decorator';
import { THEMES } from '../../../../constants/themes';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarWithThemeDark = Template.bind({});
NavbarWithThemeDark.args = {};
NavbarWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const NavbarWithThemeLight = Template.bind({});
NavbarWithThemeLight.args = {};
