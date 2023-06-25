import React from 'react';
import { BooleanType, ChildrenType } from 'types';
import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	space?: number;
	loading?: BooleanType;
};

export function Card({ children, space, loading }: Props) {
	return (
		<Wrapper className="card" space={space} loading={loading}>
			{children}
		</Wrapper>
	);
}

export default Card;
