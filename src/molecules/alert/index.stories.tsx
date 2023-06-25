import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from '.';

export default {
	title: 'Molecules/Alert',
	component: Alert,
	args: {
		title: 'Warning: You have selected to abandon this container',
		message:
			'It will be moved to the bottom of today’s list and displayed as the lowest priority container move ',
		onClick: undefined,
	},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});
export const ErrorWithButton = Template.bind({});

Error.args = {
	title: 'Error: You have selected to abandon this container',
	type: 'error',
};

ErrorWithButton.args = {
	title: 'Error',
	type: 'error',
	message: 'Something went wrong!',
	onClick: () => {
		console.log('test');
	},
};
