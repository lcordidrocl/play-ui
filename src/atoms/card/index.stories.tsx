import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '.';

export default {
	title: 'Atoms/Card',
	component: Card,
	args: {
		children: 'Children',
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
