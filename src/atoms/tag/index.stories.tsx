import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '.';

export default {
	title: 'Atoms/Tag',
	component: Tag,
	args: {
		value: 'Empty',
	},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
export const Export = Template.bind({});

Export.args = {
	value: 'Export',
};
