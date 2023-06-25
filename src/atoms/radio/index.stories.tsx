import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from '.';

export default {
	title: 'Atoms/Radio',
	component: Radio,
	argTypes: { onChange: { action: 'handleChange()' } },
	args: {
		type: 'radio',
	},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
export const WithTitle = Template.bind({});

WithTitle.args = {
	title: 'Title',
};
