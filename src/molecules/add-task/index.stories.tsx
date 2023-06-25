import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddTask from '.';

export default {
	title: 'Molecules/AddTask',
	component: AddTask,
	args: { qty: 50 },
} as ComponentMeta<typeof AddTask>;

const Template: ComponentStory<typeof AddTask> = (args) => (
	<AddTask {...args} />
);

export const Default = Template.bind({});
