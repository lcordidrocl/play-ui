import styled from 'styled-components';
import { getColor } from 'helpers';
import { ColorType } from 'types';

type Props = {
	themeType?: ColorType;
};

export const Wrapper = styled.div<Props>`
	color: ${({ themeType }) => getColor(themeType)};
	.text {
		margin: 0;
	}
`;
