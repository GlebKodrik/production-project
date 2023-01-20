import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';
import { Alert } from './alert';
import { TAlertProps } from './types';

export default {
  title: 'shared-components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: TAlertProps) => <Alert {...args} />;

export const AlertComponent = Template.bind({});
AlertComponent.args = {
  isOpen: true,
  children: 'Привет мир',
  severity: 'success',
};

export const AlertWithThemeDark = Template.bind({});
AlertWithThemeDark.args = {
  isOpen: true,
  autoClose: true,
  children: 'Привет мир',
  severity: 'success',
};
AlertWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
