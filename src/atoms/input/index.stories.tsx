import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
	title: 'Atoms/Input',
	component: Input,
	args: {
		placeholder: 'Placeholder text',
		type: 'text',
		onChange: (e) => console.log(e.target.value),
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
