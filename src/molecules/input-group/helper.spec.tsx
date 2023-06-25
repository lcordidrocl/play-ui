import { getIcon, inputIcons, findIconName } from './helper';

describe('helper functions', () => {
	it('getIcon()', () => {
		const icon = getIcon({ type: 'password' });

		expect(icon).toMatchSnapshot();
	});

	describe('findIconName()', () => {
		const cases = [
			[inputIcons.second, 'email', undefined],
			[inputIcons.second, 'password', 'Eyes'],
			[inputIcons.second, undefined, undefined],
			[undefined, undefined, undefined],
		];

		it.each(cases)(
			'given %p and %p as arguments, return %p',
			(firstArg: any, secondArg: any, expected) => {
				// TODO Types
				const result = findIconName(firstArg, secondArg);
				expect(result).toEqual(expected);
			}
		);
	});
});
