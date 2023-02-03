import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';
import { ProfilePage } from './profile-page';

export default {
  title: 'scroll-to-top/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const ProfilePageComponent = Template.bind({});
ProfilePageComponent.args = {
};

export const ProfilePageWithThemeDark = Template.bind({});
ProfilePageWithThemeDark.args = {
};
ProfilePageWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
