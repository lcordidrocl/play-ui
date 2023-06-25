import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Col from '.';

export default {
	title: 'Atoms/Col',
	component: Col,
	args: {
		children: 'Hello World!',
	},
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args) => (
	<div
		style={{
			display: 'flex',
		}}
	>
		<Col {...args} size={3} space={15}>
			<span>Size 3a</span>
			<span>Size 3b</span>
		</Col>
		<Col {...args} size={2}>
			Size 2
		</Col>
		<Col {...args} size={1}>
			Size 1
		</Col>
	</div>
);

export const Default = Template.bind({});
export const Center = Template.bind({});
export const Right = Template.bind({});

Center.args = {
	align: 'center',
};

Right.args = {
	align: 'flex-end',
};
