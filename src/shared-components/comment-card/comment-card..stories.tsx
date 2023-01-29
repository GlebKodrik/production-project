import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { THEMES } from 'constants/themes';
import { CommentCard } from './comment-card';
import { TCommentCardProps } from './types';
import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';

export default {
  title: 'shared-components/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args: TCommentCardProps) => (
  <CommentCard
    {...args}
    username="Глеб"
    comment="Привет мир"
  />
);

export const CommentCardComponent = Template.bind({});
CommentCardComponent.args = {
  color: 'secondary',
};
CommentCardComponent.decorators = [ThemeDecorator(THEMES.LIGHT)];

export const CommentCardWithThemeDark = Template.bind({});
CommentCardWithThemeDark.args = {
  color: 'secondary',
};
CommentCardWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
