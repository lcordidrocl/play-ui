import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '.';

export default {
	title: 'Atoms/Text',
	component: Text,
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita aliquid, officiis, modi quae nobis, numquam quo nihil odio minus provident at. Provident reiciendis odio neque quasi error. Aperiam, quaerat.',
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
export const xLarge = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});
export const xSmall = Template.bind({});

xLarge.args = {
	size: 'xLarge',
};

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
