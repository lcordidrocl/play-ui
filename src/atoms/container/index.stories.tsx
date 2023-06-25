import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '.';

export default {
	title: 'Atoms/Container',
	component: Container,
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste consectetur necessitatibus tenetur repellat obcaecati voluptatibus nobis rem ipsum id quisquam maxime at ullam voluptates deleniti dolores officia, voluptate ad.',
	},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
	<Container {...args} />
);

export const Default = Template.bind({});
