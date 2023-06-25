import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Filters from '.';

export default {
	title: 'Molecules/Filters',
	component: Filters,
	args: {
		list: [
			{
				value: 'Task 1',
				id: 1,
			},
			{
				value: 'Task 2',
				id: 2,
			},
			{
				value: 'Task 3',
				id: 3,
			},
		],
	},
} as ComponentMeta<typeof Filters>;

const Template: ComponentStory<typeof Filters> = (args) => <Filters />;

export const Default = Template.bind({});
