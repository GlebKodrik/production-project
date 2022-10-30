import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import { EButtonSize, EColorButton, EVariantButton } from '../../types/button';

import { ThemeDecorator } from '../../decorators/theme-decorator';
import { TButtonProps } from './types';
import { THEMES } from '../../constants/themes';

export default {
  title: 'shared-components/Button',
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
VariantOutLineWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

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
ColorInvertedWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

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
