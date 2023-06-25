/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test('.svg')
		);
		fileLoaderRule.exclude = /\.svg$/;
		config.module.rules.push({
			test: /\.svg$/,
			loader: require.resolve('@svgr/webpack'),
		});
		return config;
	},
	env: {},
	output: 'standalone',
};

module.exports = nextConfig;
