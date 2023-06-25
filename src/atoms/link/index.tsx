import React from 'react';

import { ChildrenType, SizeType, ThemeType, VariantType } from 'types';

import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	href: string;
	theme?: ThemeType;
	target?: string;
	size?: SizeType;
	variant?: VariantType | undefined;
};

export function Link({ children, theme, variant, href, target, size }: Props) {
	return (
		<Wrapper
			className="link"
			themeType={theme}
			variant={variant}
			href={href}
			target={target}
			size={size}
		>
			{children}
		</Wrapper>
	);
}

export default Link;
