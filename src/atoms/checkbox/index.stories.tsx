import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '.';

export default {
	title: 'Atoms/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Default = Template.bind({});
export const WithTitle = Template.bind({});
export const Round = Template.bind({});
export const Checked = Template.bind({});

WithTitle.args = {
	title: 'Abandon',
};

Round.args = {
	variant: 'round',
	title: 'Task',
};

Checked.args = {
	variant: 'round',
	title: 'Task',
	isChecked: true,
};
