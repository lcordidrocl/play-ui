import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '.';

export default {
	title: 'Molecules/Pagination',
	component: Pagination,
	args: { qty: 50 },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
	<Pagination {...args} />
);

export const Default = Template.bind({});
