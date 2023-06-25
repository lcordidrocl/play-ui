import styled from 'styled-components';
import { getColor, getIconSize } from 'helpers';
import { SizeType, ColorType } from 'types';

type Props = {
	size?: SizeType;
	color?: ColorType;
};

export const Wrapper = styled.div<Props>`
	display: flex;
	justify-content: center;
	color: ${({ color }) => color && getColor(color)};
	svg {
		width: 100%;
	}
	${({ size }) => {
		return getIconSize(size);
	}};
`;
