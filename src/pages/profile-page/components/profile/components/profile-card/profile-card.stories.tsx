import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from 'constants/themes';

import { ThemeDecorator } from '../../../../../../../configs-project/storybook/decorators/theme-decorator';
import { ProfileCard } from './profile-card';
import { TProfileCardProps } from './types';

export default {
  title: 'scroll-to-top/ProfilePage/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args: TProfileCardProps) => (
  <ProfileCard
    isProfileDataReceivedSuccessfully={false}
    profileEditData={{
      city: 'Город',
      first: 'Глеб',
      country: 'Armenia',
      age: '18',
      username: 'admin',
      lastname: 'Кодрик',
      currency: 'RUB',
    }}
    profileData={{
      city: 'Город',
      first: 'Глеб',
      country: 'Armenia',
      age: '18',
      username: 'admin',
      lastname: 'Кодрик',
      currency: 'RUB',
    }}
    {...args}
  />
);

export const ProfileCardComponent = Template.bind({});
ProfileCardComponent.args = {};

export const ProfileCardError = Template.bind({});
ProfileCardError.args = {
  isProfileDataReceivedSuccessfully: true,
};

export const ProfileCardLoading = Template.bind({});
ProfileCardLoading.args = {
  isLoading: true,
};

export const ProfileCardThemeDark = Template.bind({});
ProfileCardThemeDark.args = {};
ProfileCardThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
