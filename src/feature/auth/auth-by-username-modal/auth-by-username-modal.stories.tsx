import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from 'constants/themes';

import { ThemeDecorator } from '../../../../configs-project/storybook/decorators/theme-decorator';
import { AuthByUsernameModal } from './auth-by-username-modal';

export default {
  title: 'feature/AuthByUsernameModal',
  component: AuthByUsernameModal,
} as ComponentMeta<typeof AuthByUsernameModal>;

const Template: ComponentStory<typeof AuthByUsernameModal> = (args) => <AuthByUsernameModal {...args} />;

export const AuthByUsernameModalThemeLight = Template.bind({});
AuthByUsernameModalThemeLight.args = {
  isOpen: true,
  onClose: () => {},
};

export const AuthByUsernameModalThemeDark = Template.bind({});
AuthByUsernameModalThemeDark.args = {
  isOpen: true,
  onClose: () => {},
};

AuthByUsernameModalThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
