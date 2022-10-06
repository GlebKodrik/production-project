import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, ELinkTheme } from './app-link';
import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../config/decorators/theme-decorator';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: ELinkTheme.PRIMARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Text',
  theme: ELinkTheme.INVERTED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: ELinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(ETheme.DARK)];
