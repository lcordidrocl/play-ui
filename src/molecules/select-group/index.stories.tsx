import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectGroup from '.';

export default {
	title: 'Molecules/SelectGroup',
	component: SelectGroup,
	argTypes: { onChange: { action: 'handleChange()' } },
	args: {
		children: (
			<>
				<option>Value 1</option> <option>Value 2</option>
			</>
		),
	},
} as ComponentMeta<typeof SelectGroup>;

const Template: ComponentStory<typeof SelectGroup> = (args) => (
	<SelectGroup {...args} />
);

export const Default = Template.bind({});
export const WithTitle = Template.bind({});

WithTitle.args = {
	placeholder: 'Title',
};
