import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddSubTask from '.';

export default {
	title: 'Molecules/AddSubTask',
	component: AddSubTask,
	args: {
		placeholder: 'Add Sub Task',
	},
} as ComponentMeta<typeof AddSubTask>;

const Template: ComponentStory<typeof AddSubTask> = (args) => (
	<AddSubTask {...args} />
);

export const Default = Template.bind({});
