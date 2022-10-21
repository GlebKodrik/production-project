import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './modal';

import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import { ThemeDecorator } from '../../config/decorators/theme-decorator';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalWithThemeDark = Template.bind({});
ModalWithThemeDark.args = {
  open: true,
  children: 'Привет',
};
ModalWithThemeDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const ModalWithThemeLight = Template.bind({});
ModalWithThemeLight.args = {
  open: true,
  children: 'Привет',
};
