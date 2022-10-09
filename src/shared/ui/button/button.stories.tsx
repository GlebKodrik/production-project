import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import { EButtonSize, EColorButton, EVariantButton } from '../../../app/types/button';
import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../config/decorators/theme-decorator';
import { TButtonProps } from './types';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: TButtonProps) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  clear: true,
};

export const VariantOutLine = Template.bind({});
VariantOutLine.args = {
  children: 'Button',
  variant: EVariantButton.OUTLINE,
};

export const VariantOutLineWithThemeDark = Template.bind({});
VariantOutLineWithThemeDark.args = {
  children: 'Button',
  variant: EVariantButton.OUTLINE,
};
VariantOutLineWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const ColorInverted = Template.bind({});
ColorInverted.args = {
  children: 'Button',
  color: EColorButton.INVERTED,
};

export const ColorInvertedWithThemeDark = Template.bind({});
ColorInvertedWithThemeDark.args = {
  children: 'Button',
  color: EColorButton.INVERTED,
};
ColorInvertedWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: 'Button',
  size: EButtonSize.MEDIUM,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'Button',
  size: EButtonSize.LARGE,
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
  children: 'Button',
  size: EButtonSize.EXTRA_LARGE,
};
