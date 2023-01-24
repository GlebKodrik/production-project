import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';
import TextCodeError from './text-code-error';
import { TTextCodeErrorProps } from './types';

export default {
  title: 'shared-components/TextCodeError',
  component: TextCodeError,
} as ComponentMeta<typeof TextCodeError>;

const Template: ComponentStory<typeof TextCodeError> = (
  args: TTextCodeErrorProps,
) => <TextCodeError {...args}>Ошибка загрузки</TextCodeError>;

export const TextCodeErrorComponent = Template.bind({});
TextCodeErrorComponent.args = {};

export const TextCodeErrorWithThemeDark = Template.bind({});
TextCodeErrorWithThemeDark.args = {};
TextCodeErrorWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
