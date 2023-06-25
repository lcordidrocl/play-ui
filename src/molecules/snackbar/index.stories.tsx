import { ComponentStory, ComponentMeta } from '@storybook/react';

import Snackbar from '.';

export default {
	title: 'Molecules/Snackbar',
	component: Snackbar,
	args: {
		type: 'secondary',
		message: (
			<>
				Snackbar message <strong>XXXX</strong>
			</>
		),
	},
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
	<div style={{ position: 'relative', margin: '10%' }}>
		<Snackbar {...args} />
	</div>
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
