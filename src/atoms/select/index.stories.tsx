import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '.';

export default {
	title: 'Atoms/Select',
	component: Select,
	argTypes: { onChange: { action: 'handleChange()' } },
	args: {
		children: (
			<>
				<option>Value 1</option> <option>Value 2</option>
			</>
		),
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
export const WithTitle = Template.bind({});

WithTitle.args = {
	placeholder: 'Title',
};
