import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FixedHeight from '.';

export default {
	title: 'Atoms/FixedHeight',
	component: FixedHeight,
	args: {
		children: (
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet
					fuga debitis quo in recusandae quod blanditiis ea quidem odit ullam nobis,
					eum a autem aperiam rem facilis maxime dignissimos. Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Tenetur eveniet fuga debitis quo in
					recusandae quod blanditiis ea quidem odit ullam nobis, eum a autem aperiam
					rem facilis maxime dignissimos. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Tenetur eveniet fuga debitis quo in recusandae quod
					blanditiis ea quidem odit ullam nobis, eum a autem aperiam rem facilis
					maxime dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Tenetur eveniet fuga debitis quo in recusandae quod blanditiis ea
					quidem odit ullam nobis, eum a autem aperiam rem facilis maxime
					dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur eveniet fuga debitis quo in recusandae quod blanditiis ea quidem
					odit ullam nobis, eum a autem aperiam rem facilis maxime dignissimos. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet fuga
					debitis quo in recusandae quod blanditiis ea quidem odit ullam nobis, eum a
					autem aperiam rem facilis maxime dignissimos. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Tenetur eveniet fuga debitis quo in
					recusandae quod blanditiis ea quidem odit ullam nobis, eum a autem aperiam
					rem facilis maxime dignissimos. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Tenetur eveniet fuga debitis quo in recusandae quod
					blanditiis ea quidem odit ullam nobis, eum a autem aperiam rem facilis
					maxime dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Tenetur eveniet fuga debitis quo in recusandae quod blanditiis ea
					quidem odit ullam nobis, eum a autem aperiam rem facilis maxime
					dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur eveniet fuga debitis quo in recusandae quod blanditiis ea quidem
					odit ullam nobis, eum a autem aperiam rem facilis maxime dignissimos. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet fuga
					debitis quo in recusandae quod blanditiis ea quidem odit ullam nobis, eum a
					autem aperiam rem facilis maxime dignissimos. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Tenetur eveniet fuga debitis quo in
					recusandae quod blanditiis ea quidem odit ullam nobis, eum a autem aperiam
					rem facilis maxime dignissimos. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Tenetur eveniet fuga debitis quo in recusandae quod
					blanditiis ea quidem odit ullam nobis, eum a autem aperiam rem facilis
					maxime dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Tenetur eveniet fuga debitis quo in recusandae quod blanditiis ea
					quidem odit ullam nobis, eum a autem aperiam rem facilis maxime
					dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur eveniet fuga debitis quo in recusandae quod blanditiis ea quidem
					odit ullam nobis, eum a autem aperiam rem facilis maxime dignissimos.
				</p>
			</div>
		),
	},
} as ComponentMeta<typeof FixedHeight>;

const Template: ComponentStory<typeof FixedHeight> = (args) => (
	<FixedHeight {...args} />
);

export const Default = Template.bind({});
