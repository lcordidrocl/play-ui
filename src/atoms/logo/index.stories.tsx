import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '.';

export default {
	title: 'Atoms/Logo',
	component: Logo,
	args: {
		name: 'SortMe',
	},
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
export const White = Template.bind({});
export const Red = Template.bind({});

White.args = {
	theme: 'white',
};

Red.args = {
	theme: 'red',
};
