import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';
import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../../config/decorators/theme-decorator';
import { ELinkColor } from '../../../../app/types/link';

export default {
  title: 'shared/Link',
  component: Link,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  children: 'Link',
  color: ELinkColor.PRIMARY,
};

export const ColorInverted = Template.bind({});
ColorInverted.args = {
  children: 'Link',
  color: ELinkColor.INVERTED,
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  children: 'Link',
  color: ELinkColor.SECONDARY,
};

export const ColorPrimaryWithThemeDark = Template.bind({});
ColorPrimaryWithThemeDark.args = {
  children: 'Link',
  color: ELinkColor.PRIMARY,
};
ColorPrimaryWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];
