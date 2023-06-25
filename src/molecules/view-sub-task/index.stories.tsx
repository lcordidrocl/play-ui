import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ViewSubTask from '.';

export default {
	title: 'Molecules/ViewSubTask',
	component: ViewSubTask,
	args: { title: 'Do cleaning' },
} as ComponentMeta<typeof ViewSubTask>;

const Template: ComponentStory<typeof ViewSubTask> = (args) => (
	<ViewSubTask {...args} />
);

export const Default = Template.bind({});
