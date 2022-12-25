import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from '@constants/themes';
import { ProfilePage } from './profile-page';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';

export default {
  title: 'page/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const ProfilePageThemeLight = Template.bind({});
ProfilePageThemeLight.args = {};

export const ProfilePageThemeDark = Template.bind({});
ProfilePageThemeDark.args = {};
ProfilePageThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
