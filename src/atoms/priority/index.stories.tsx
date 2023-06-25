import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Priority from '.';

export default {
	title: 'Atoms/Priority',
	component: Priority,
	args: {
		from: 'Truck',
		to: 'Yard',
	},
} as ComponentMeta<typeof Priority>;

const Template: ComponentStory<typeof Priority> = (args) => (
	<Priority {...args} />
);

export const Default = Template.bind({});
