import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';
import { Avatar } from './avatar';
import { TAvatarProps } from './types';

export default {
  title: 'shared-components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: TAvatarProps) => <Avatar {...args} />;

export const AvatarComponent = Template.bind({});
AvatarComponent.args = {
  // eslint-disable-next-line max-len
  src: 'https://sun9-62.userapi.com/impg/LHcdw0H9Ah5M3VtmxyazUzgmypJcF078OrZHuQ/jxE8K-tM3as.jpg?size=1620x2160&quality=95&sign=40f55c8d3d7d989590efe8dd8db4d7d7&type=album',
};

export const AvatarWithThemeDark = Template.bind({});
AvatarWithThemeDark.args = {
  // eslint-disable-next-line max-len
  src: 'https://sun9-62.userapi.com/impg/LHcdw0H9Ah5M3VtmxyazUzgmypJcF078OrZHuQ/jxE8K-tM3as.jpg?size=1620x2160&quality=95&sign=40f55c8d3d7d989590efe8dd8db4d7d7&type=album',
};
AvatarWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
