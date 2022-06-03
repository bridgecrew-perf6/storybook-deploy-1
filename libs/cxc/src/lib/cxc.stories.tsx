import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Cxc } from './cxc';

export default {
  component: Cxc,
  title: 'Cxc',
} as ComponentMeta<typeof Cxc>;

const Template: ComponentStory<typeof Cxc> = (args) => <Cxc {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
