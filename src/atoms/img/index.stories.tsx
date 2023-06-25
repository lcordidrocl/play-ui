import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Img from '.';

export default {
	title: 'Atoms/Img',
	component: Img,
	args: {
		src: '/default-img.svg',
		alt: 'default img alt',
		width: 100,
		height: 100,
	},
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Default = Template.bind({});
