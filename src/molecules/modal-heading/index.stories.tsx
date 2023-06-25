import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ModalHeading from '.';

export default {
	title: 'Molecules/ModalHeading',
	component: ModalHeading,
	args: { title: 'Edit Task' },
} as ComponentMeta<typeof ModalHeading>;

const Template: ComponentStory<typeof ModalHeading> = (args) => (
	<ModalHeading {...args} />
);

export const Default = Template.bind({});
