import { ComponentStory, ComponentMeta } from '@storybook/react';

import TaskLR from '.';

export default {
	title: 'Molecules/TaskLR',
	component: TaskLR,
	args: {
		title: 'Buy milk',
	},
} as ComponentMeta<typeof TaskLR>;

const Template: ComponentStory<typeof TaskLR> = (args) => <TaskLR {...args} />;

export const Default = Template.bind({});
