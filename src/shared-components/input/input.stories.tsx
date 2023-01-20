import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';
import { Input } from './input';
import { TInputProps } from './types';

export default {
  title: 'shared-components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: TInputProps) => <Input {...args} />;

export const InputComponent = Template.bind({});
InputComponent.args = {
  variant: 'outline',
  color: 'primary',
};

export const InputWithThemeDark = Template.bind({});
InputWithThemeDark.args = {
  variant: 'outline',
  color: 'primary',
};
InputWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
