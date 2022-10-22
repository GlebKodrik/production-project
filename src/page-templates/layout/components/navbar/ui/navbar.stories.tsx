import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';
import {
  ETheme,
} from '../../../../../context/theme-context';
import { ThemeDecorator } from '../../../../../configs/decorators/theme-decorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarWithThemeDark = Template.bind({});
NavbarWithThemeDark.args = {};
NavbarWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const NavbarWithThemeLight = Template.bind({});
NavbarWithThemeLight.args = {};
