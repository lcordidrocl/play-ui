import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmptyLR from '.';

export default {
	title: 'Molecules/EmptyLR',
	component: EmptyLR,
	args: {
		title: 'No task exits!',
	},
} as ComponentMeta<typeof EmptyLR>;

const Template: ComponentStory<typeof EmptyLR> = (args) => (
	<EmptyLR {...args} />
);

export const Default = Template.bind({});
