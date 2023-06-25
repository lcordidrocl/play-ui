import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from '.';

export default {
	title: 'Atoms/Grid',
	component: Grid,
	args: {
		children: (
			<>
				<p>Hello</p>
				<p>World!</p>
			</>
		),
	},
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
	<Grid {...args}>{args.children}</Grid>
);

export const Default = Template.bind({});
export const Center = Template.bind({});
export const Right = Template.bind({});
export const Space = Template.bind({});
export const Cols = Template.bind({});

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

Cols.args = {
	cols: 'auto auto',
};
