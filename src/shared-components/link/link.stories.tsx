import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { ELinkColor } from '../../types/link';
import { THEMES } from '../../constants/themes';

export default {
  title: 'shared-components/Link',
  component: Link,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkComponent = Template.bind({});
LinkComponent.args = {
  children: 'Link',
  color: ELinkColor.SECONDARY,
};

export const ColorWithThemeDark = Template.bind({});
ColorWithThemeDark.args = {
  children: 'Link',
  color: ELinkColor.SECONDARY,
};
ColorWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
