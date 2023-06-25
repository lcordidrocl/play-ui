import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page from '.';

export default {
	title: 'Atoms/Page',
	component: Page,
	args: {
		children: (
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet
				fuga debitis quo in recusandae quod blanditiis ea quidem odit ullam nobis,
				eum a autem aperiam rem facilis maxime dignissimos.
			</p>
		),
	},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
