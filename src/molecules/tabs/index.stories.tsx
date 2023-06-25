import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from '.';

export default {
	title: 'Molecules/Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
