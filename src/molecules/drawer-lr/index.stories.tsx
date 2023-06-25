import { ComponentStory, ComponentMeta } from '@storybook/react';

import DrawerLR from '.';

export default {
	title: 'Molecules/DrawerLR',
	component: DrawerLR,
	args: {
		title: 'Today',
	},
} as ComponentMeta<typeof DrawerLR>;

const Template: ComponentStory<typeof DrawerLR> = (args) => (
	<DrawerLR {...args} />
);

export const Default = Template.bind({});
