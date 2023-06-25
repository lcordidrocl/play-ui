import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputGroup from '.';

export default {
	title: 'Molecules/InputGroup',
	component: InputGroup,
	args: {
		placeholder: 'Placeholder text',
		type: 'email',
	},
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
	<InputGroup {...args} />
);

export const Default = Template.bind({});
export const Text = Template.bind({});
export const Email = Template.bind({});
export const Password = Template.bind({});
export const EmailError = Template.bind({});

Text.args = {
	type: 'text',
};

Email.args = {
	type: 'email',
	title: 'Email',
	placeholder: 'abc@abc.com.au',
};

Password.args = {
	type: 'password',
};

EmailError.args = {
	type: 'email',
	title: 'Email',
	value: 'john@abc.com.au',
	error: 'Please enter valid email',
};
