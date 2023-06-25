import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'handleClick' },
	},
	args: {
		type: 'button',
		size: 'Medium',
		variant: 'primary',
		theme: 'primary',
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
		<Button {...args} variant="primary">
			Primary
		</Button>
		<Button {...args} variant="secondary">
			Secondary
		</Button>
		<Button {...args} variant="round">
			R
		</Button>
		<Button {...args} variant="outline">
			Outline
		</Button>
		<Button {...args} variant="transparent">
			Transparent
		</Button>
		<Button {...args} disabled={true}>
			Disabled
		</Button>
	</div>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});

Secondary.args = {
	theme: 'secondary',
};

Warning.args = {
	theme: 'warning',
};

Error.args = {
	theme: 'error',
};
