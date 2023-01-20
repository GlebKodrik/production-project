import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from './error';

export default {
  title: 'page/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = () => <Error error={{ stack: 'Ошибка JavaScript' } as Error} />;

export const ErrorPage = Template.bind({});
ErrorPage.args = {};
