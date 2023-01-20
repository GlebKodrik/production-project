import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';
import { Icon } from './icon';
import { TIconProps } from './types';

export default {
  title: 'shared-components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: TIconProps) => <Icon {...args} />;

export const IconComponent = Template.bind({});
IconComponent.args = {
  name: 'home',
};

export const IconWithThemeDark = Template.bind({});
IconWithThemeDark.args = {
  name: 'check-circle-outline',
  fill: 'red',
};
IconWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
