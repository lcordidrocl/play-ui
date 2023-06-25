import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from '.';

export default {
	title: 'Molecules/Carousel',
	component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = () => (
	<Carousel>
		<h1>Slide One</h1>
		<h1>Slide Two</h1>
		<h1>Slide Three</h1>
		<h1>Slide Four</h1>
		<h1>Slide Five</h1>
		<h1>Slide Six</h1>
	</Carousel>
);

export const Default = Template.bind({});
