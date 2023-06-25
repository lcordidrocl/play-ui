import { ComponentStory, ComponentMeta } from '@storybook/react';

import TaskTR from '.';

export default {
	title: 'Molecules/TaskTR',
	component: TaskTR,
	args: {
		title: 'Buy milk',
		id: '1',
	},
} as ComponentMeta<typeof TaskTR>;

const Template: ComponentStory<typeof TaskTR> = (args) => (
	<table>
		<tbody>
			<TaskTR {...args} />
		</tbody>
	</table>
);

export const Default = Template.bind({});
