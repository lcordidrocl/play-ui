import { ComponentStory, ComponentMeta } from '@storybook/react';

import ViewNumField from '.';

export default {
	title: 'Molecules/ViewNumField',
	component: ViewNumField,
	args: {
		value: '05f100',
	},
} as ComponentMeta<typeof ViewNumField>;

const Template: ComponentStory<typeof ViewNumField> = (args) => (
	<ViewNumField {...args} />
);

export const Default = Template.bind({});
export const Selected = Template.bind({});

Selected.args = {
	selected: true,
};
