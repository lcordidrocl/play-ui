import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopBottomShadow from '.';

export default {
	title: 'Atoms/TopBottomShadow',
	component: TopBottomShadow,
	args: {
		children: 'Children',
	},
} as ComponentMeta<typeof TopBottomShadow>;

const Template: ComponentStory<typeof TopBottomShadow> = (args) => (
	<TopBottomShadow {...args} />
);

export const Default = Template.bind({});
