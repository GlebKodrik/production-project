import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './modal';

import {
  ETheme,
} from '../../context/theme-context';
import { ThemeDecorator } from '../../configs/decorators/theme-decorator';

export default {
  title: 'shared-components/Modal',
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
