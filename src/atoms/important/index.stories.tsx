import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Important from '.';

export default {
	title: 'Atoms/Important',
	component: Important,
	args: {},
} as ComponentMeta<typeof Important>;

const Template: ComponentStory<typeof Important> = (args) => (
	<Important {...args} />
);

export const Default = Template.bind({});
export const IsImportant = Template.bind({});

IsImportant.args = {
	important: true,
};
