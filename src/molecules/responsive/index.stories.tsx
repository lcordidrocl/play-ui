import { ComponentStory, ComponentMeta } from '@storybook/react';

import Responsive from '.';

export default {
	title: 'Molecules/Responsive',
	component: Responsive,
	args: { qty: 50 },
} as ComponentMeta<typeof Responsive>;

const Template: ComponentStory<typeof Responsive> = (args) => (
	<Responsive {...args} />
);

export const Default = Template.bind({});
