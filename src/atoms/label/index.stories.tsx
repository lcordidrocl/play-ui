import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from '.';

export default {
	title: 'atoms/Label',
	component: Label,
	args: {
		children: 'Label',
	},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const xSmall = Template.bind({});

Large.args = {
	size: 'Large',
};
Medium.args = {
	size: 'Medium',
};
Small.args = {
	size: 'Small',
};
xSmall.args = {
	size: 'xSmall',
};
