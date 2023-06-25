import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '.';

export default {
	title: 'Atoms/Heading',
	component: Heading,
	args: {
		children: 'Heading',
	},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
	<Heading {...args} />
);

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});

H1.args = {
	as: 'h1',
};
H2.args = {
	as: 'h2',
};
H3.args = {
	as: 'h3',
};
H4.args = {
	as: 'h4',
};
H5.args = {
	as: 'h5',
};
H6.args = {
	as: 'h6',
};
