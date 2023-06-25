import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextEditor from '.';

export default {
	title: 'Atoms/TextEditor',
	component: TextEditor,
	args: {},
} as ComponentMeta<typeof TextEditor>;

const Template: ComponentStory<typeof TextEditor> = (args) => (
	<TextEditor {...args} />
);

export const Default = Template.bind({});
