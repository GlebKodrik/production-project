import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';
import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../shared/config/decorators/theme-decorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const NavbarLight = Template.bind({});
NavbarLight.args = {};
