import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '.';

export default {
	title: 'Atoms/Avatar',
	component: Avatar,
	args: {
		name: 'JD',
		size: 'Default',
	},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
