import React from 'react';
import { ChildrenType } from 'types';
import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	height?: number;
};

export function TopBottomShadow({ children, height }: Props) {
	return (
		<Wrapper className="top-bottom-shadow" height={height}>
			{children}
		</Wrapper>
	);
}

export default TopBottomShadow;
