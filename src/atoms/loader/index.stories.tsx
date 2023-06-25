import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from '.';

export default {
	title: 'Atoms/Loader',
	component: Loader,
	args: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader />;

export const Default = Template.bind({});
