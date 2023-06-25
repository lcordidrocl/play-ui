import React from 'react';
import Text from '../text';
import { Wrapper } from './index.styles';
import { SizeType } from 'types';

type Props = {
	name: string;
	size: SizeType;
	onClick: () => void;
};

export function Avatar({ name, size, onClick }: Props) {
	return (
		<Wrapper className="avatar" onClick={onClick}>
			<Text size={size}>
				<strong>{name}</strong>
			</Text>
		</Wrapper>
	);
}

export default Avatar;
