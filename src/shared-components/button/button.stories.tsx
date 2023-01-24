import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { TButtonProps } from './types';
import { THEMES } from '../../constants/themes';

export default {
  title: 'shared-components/Skeleton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: TButtonProps) => <Button {...args}>Привет</Button>;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  variant: 'clear',
  color: 'secondary',
};

export const ButtonWithThemeDark = Template.bind({});
ButtonWithThemeDark.args = {
  children: 'Button',
  variant: 'outline',
  color: 'secondary',
};
ButtonWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
