import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimePicker from '.';

export default {
	title: 'Molecules/TimePicker',
	component: TimePicker,
	args: {
		date: new Date(),
	},
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => (
	<TimePicker {...args} />
);

export const Default = Template.bind({});
