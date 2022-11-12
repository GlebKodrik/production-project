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

export const VariantClear = Template.bind({});
VariantClear.args = {
  children: 'Button',
  variant: 'clear',
};

export const VariantText = Template.bind({});
VariantText.args = {
  children: 'Button',
  variant: 'text',
};

export const VariantOutLine = Template.bind({});
VariantOutLine.args = {
  children: 'Button',
  variant: 'outline',
};

export const VariantOutLineWithThemeDark = Template.bind({});
VariantOutLineWithThemeDark.args = {
  children: 'Button',
  variant: 'outline',
};
VariantOutLineWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SizeMediumWithVariantClear = Template.bind({});
SizeMediumWithVariantClear.args = {
  children: 'Button',
  size: 'medium',
};

export const SizeLargeWithVariantClear = Template.bind({});
SizeLargeWithVariantClear.args = {
  children: 'Button',
  size: 'large',
};

export const SizeExtraLargeWithVariantClear = Template.bind({});
SizeExtraLargeWithVariantClear.args = {
  children: 'Button',
  size: 'extra-large',
};
