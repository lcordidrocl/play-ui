import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from '.';

export default {
	title: 'Molecules/Modal',
	component: Modal,
	args: {
		onClick: () => null,
		children: <b>Modal</b>,
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
export const Left = Template.bind({});

Default.args = {
	size: 'Medium',
};

Left.args = {
	variant: 'left',
	size: 'xSmall',
};
