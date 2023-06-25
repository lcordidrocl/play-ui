import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '.';

export default {
	title: 'Atoms/Link',
	component: Link,
	args: {
		children: 'Click here',
	},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
	href: '/',
};
Primary.args = {
	href: '/',
	theme: 'primary',
	variant: 'underline',
};
