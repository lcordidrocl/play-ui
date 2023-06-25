import { ComponentStory, ComponentMeta } from '@storybook/react';

import Textarea from '.';

export default {
	title: 'Atoms/Textarea',
	component: Textarea,
	args: {
		placeholder: 'Placeholder text',
		type: 'text',
		onChange: (e) => console.log(e.target.value),
	},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);

export const Default = Template.bind({});
