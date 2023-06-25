import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInput from '.';

export default {
	title: 'Atoms/SearchInput',
	component: SearchInput,
	args: {
		placeholder: 'Search',
		name: 'search',
		onChange: (e) => console.log(e.target.value),
	},
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
	<SearchInput {...args} />
);

export const Default = Template.bind({});
