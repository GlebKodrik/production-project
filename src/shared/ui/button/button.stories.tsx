import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import { TThemeButton } from './types';
import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../config/decorators/theme-decorator';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  clear: true,
};

export const OutLine = Template.bind({});
OutLine.args = {
  children: 'Button',
  theme: TThemeButton.OUTLINE,
};

export const OutLineDark = Template.bind({});
OutLineDark.args = {
  children: 'Button',
  theme: TThemeButton.OUTLINE,
};
OutLineDark.decorators = [ThemeDecorator(ETheme.DARK)];
