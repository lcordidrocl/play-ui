import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from '.';
import Icon from '../icon';

export default {
	title: 'Atoms/Toggle',
	component: Toggle,
	args: {
		children: <Icon as="Eyes" />,
	},
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
