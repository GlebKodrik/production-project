import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './code';
import { TCodeProps } from './types';
import { ThemeDecorator } from '../../../configs-project/storybook/decorators/theme-decorator';
import { THEMES } from '../../constants/themes';

export default {
  title: 'shared-components/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (
  args: TCodeProps,
) => <Code {...args} />;

export const CodeComponent = Template.bind({});
CodeComponent.args = {
  color: 'secondary',
  children: 'export default {\n'
    + '    title: \'shared/Code\',\n'
    + '    component: Code,\n'
    + '    argTypes: {\n'
    + '        backgroundColor: { control: \'color\' },\n'
    + '    },\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
    + '\n'
    + 'export const Normal = Template.bind({});',
};

export const CodeWithThemeDark = Template.bind({});
CodeWithThemeDark.args = {
  color: 'secondary',
  children: 'export default {\n'
    + '    title: \'shared/Code\',\n'
    + '    component: Code,\n'
    + '    argTypes: {\n'
    + '        backgroundColor: { control: \'color\' },\n'
    + '    },\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
    + '\n'
    + 'export const Normal = Template.bind({});',
};
CodeWithThemeDark.decorators = [ThemeDecorator(THEMES.DARK)];
