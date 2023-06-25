import GlobalStyle from "../src/utils/global-style";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: "light",
		values: [
			{
				name: "light",
				value: "#F6F7F8",
			},
			{
				name: "dark",
				value: "#515F6B",
			},
			{
				name: "white",
				value: "#ffffff",
			},
			{
				name: "black",
				value: "#000000",
			},
		],
	},
};

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];
