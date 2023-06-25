import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Row from '.';

export default {
	title: 'Atoms/Row',
	component: Row,
	args: {
		children: (
			<>
				<p>Hello</p>
				<p>World!</p>
			</>
		),
	},
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => (
	<Row {...args}>{args.children}</Row>
);

export const Default = Template.bind({});
export const Center = Template.bind({});
export const Right = Template.bind({});
export const Space = Template.bind({});

Center.args = {
	align: 'center',
};

Right.args = {
	align: 'flex-end',
};

Space.args = {
	align: 'flex-start',
	space: 50,
};
