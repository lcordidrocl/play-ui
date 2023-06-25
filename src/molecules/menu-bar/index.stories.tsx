import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuBar from '.';

export default {
	title: 'Molecules/MenuBar',
	component: MenuBar,
	args: {},
} as ComponentMeta<typeof MenuBar>;

const Template: ComponentStory<typeof MenuBar> = (args) => (
	<div style={{ marginLeft: '200px' }}>
		<MenuBar {...args} />
	</div>
);

export const Default = Template.bind({});
