import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from '@constants/themes';
import { Sidebar } from './sidebar';

import { ThemeDecorator } from '../../../../../configs-project/storybook/decorators/theme-decorator';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const SidebarWithThemeDark = Template.bind({});
SidebarWithThemeDark.args = {};
SidebarWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SidebarWithThemeLight = Template.bind({});
SidebarWithThemeLight.args = {};
