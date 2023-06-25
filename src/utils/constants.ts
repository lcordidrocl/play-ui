export const colors = {
	charcoal: '#222222',
	neutral50: '#F6F7F8',
	neutral75: '#efefef',
	neutral100: '#D3D7DA',
	neutral200: '#A7AFB5',
	neutral300: '#7C8790',
	neutral400: '#515F6B',
	neutral500: '#253746',

	blue: '#003e62',
	blue20: '#e6f0f6',
	blue50: '#006eaf',
	blue100: '#005e95',
	blue200: '#004e7c',
	blue300: '#002e49',

	black: '#000000',
	overlay: 'rgba(34, 34, 34, 0.20)',

	white: '#ffffff',

	red: '#DD182C',
	red50: '#FDF2EC',

	orange300: '#D86018',

	green: '#257226',

	green100: '#53B046',

	get primary() {
		return this.blue;
	},
	get secondary() {
		return this.blue50;
	},
	get paragraph() {
		return this.charcoal;
	},
	get border() {
		return this.neutral100;
	},
	get primaryBg() {
		return this.neutral50;
	},
	get secondaryBg() {
		return this.white;
	},
	get error() {
		return this.red;
	},
	get warning() {
		return this.orange300;
	},
	get success() {
		return this.green100;
	},
};

export const fonts = {
	fontVerdana: 'Verdana, sans-serif',
	fontLato: 'Lato, Verdana',
	get primaryFont() {
		return this.fontLato;
	},
};

export const Sizes = {
	XXS: 'xxSmall',
	XS: 'xSmall',
	S: 'Small',
	M: 'Medium',
	L: 'Large',
	XL: 'xLarge',
	XXL: 'xxLarge',
	D: 'Default',
};

export const TabletSize = '1100px';
export const MobileSize = '800px';

export const colorThemes = Object.entries(colors)
	.map(([name]) => `${name}`)
	.join(' | ');
