import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DatePicker from '.';

export default {
	title: 'Molecules/DatePicker',
	component: DatePicker,
	args: {
		date: new Date(),
	},
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
	<DatePicker {...args} />
);

export const Default = Template.bind({});
