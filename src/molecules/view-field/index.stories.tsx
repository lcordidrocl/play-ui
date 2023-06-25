import { ComponentStory, ComponentMeta } from '@storybook/react';

import ViewField from '.';

export default {
	title: 'Molecules/ViewField',
	component: ViewField,
	args: {
		children: 'XXXXXX',
		placeholder: 'Repeat',
	},
} as ComponentMeta<typeof ViewField>;

const Template: ComponentStory<typeof ViewField> = (args) => (
	<ViewField {...args} />
);

export const Default = Template.bind({});
