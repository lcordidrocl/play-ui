import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropMenu from '.';

const defaultContent = [{ id: '4', title: 'Logout', link: '/', icon: 'Tick' }];

export default {
	title: 'Molecules/DropMenu',
	component: DropMenu,
	args: {
		content: defaultContent,
	},
} as ComponentMeta<typeof DropMenu>;

const Template: ComponentStory<typeof DropMenu> = (args) => (
	<DropMenu {...args} />
);

export const Default = Template.bind({});
