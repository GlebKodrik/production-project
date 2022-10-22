import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './sidebar';
import {
  ETheme,
} from '../../../../../context/theme-context';
import { ThemeDecorator } from '../../../../../configs/decorators/theme-decorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const SidebarWithThemeDark = Template.bind({});
SidebarWithThemeDark.args = {};
SidebarWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const SidebarWithThemeLight = Template.bind({});
SidebarWithThemeLight.args = {};
