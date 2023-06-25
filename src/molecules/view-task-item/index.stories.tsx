import { ComponentStory, ComponentMeta } from '@storybook/react';

import ViewTaskItem from '.';

export default {
	title: 'Molecules/ViewTaskItem',
	component: ViewTaskItem,
	args: {
		title: 'Category',
		children: <>View Task Item</>,
		onCancel: () => {
			console.log('cancel');
		},
		onSave: () => {
			console.log('save');
		},
	},
} as ComponentMeta<typeof ViewTaskItem>;

const Template: ComponentStory<typeof ViewTaskItem> = (args) => (
	<ViewTaskItem {...args} />
);

export const Default = Template.bind({});
