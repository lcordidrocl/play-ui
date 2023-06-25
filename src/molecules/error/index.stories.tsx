import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Error from '.';

export default {
	title: 'Molecules/Error',
	component: Error,
	args: { value: 'Lorem ipsum dolor sit amet.' },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});
