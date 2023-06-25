import { ComponentStory, ComponentMeta } from '@storybook/react';

import Notification from '.';

export default {
	title: 'Molecules/Notification',
	component: Notification,
	args: {
		type: 'secondary',
		message: (
			<>
				Notification message <strong>XXXX</strong>
			</>
		),
	},
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
	<Notification {...args} />
);

export const Default = Template.bind({});
export const Error = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});

Error.args = {
	type: 'error',
};

Success.args = {
	type: 'success',
};

Warning.args = {
	type: 'warning',
};
