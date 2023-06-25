import { ComponentStory, ComponentMeta } from '@storybook/react';

import DND from '.';

export default {
	title: 'Molecules/DND',
	component: DND,
} as ComponentMeta<typeof DND>;

const Template: ComponentStory<typeof DND> = (args) => <DND {...args} />;

export const Default = Template.bind({});
