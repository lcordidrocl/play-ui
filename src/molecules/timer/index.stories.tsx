import { ComponentStory, ComponentMeta } from '@storybook/react';

import Timer from '.';

export default {
	title: 'Molecules/Timer',
	component: Timer,
	args: {
		date: new Date(),
	},
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
