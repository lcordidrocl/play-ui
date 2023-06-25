import { ComponentStory, ComponentMeta } from '@storybook/react';

import MonthsYear from '.';

export default {
	title: 'Molecules/MonthsYear',
	component: MonthsYear,
	args: {
		show: true,
	},
} as ComponentMeta<typeof MonthsYear>;

const Template: ComponentStory<typeof MonthsYear> = (args) => (
	<MonthsYear {...args} />
);

export const Default = Template.bind({});
