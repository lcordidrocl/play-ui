import styled from 'styled-components';
import { getFontSize } from 'helpers';

export const H1 = styled.h1`
	${() => getFontSize('xLarge')}
	font-weight: 700;
`;
export const H2 = styled.h2`
	${() => getFontSize('Large')}
	font-weight: 700;
`;
export const H3 = styled.h3`
	${() => getFontSize('Medium')}
	font-weight: 700;
`;
export const H4 = styled.h4`
	${() => getFontSize('Small')}
	font-weight: 700;
`;
export const H5 = styled.h5`
	${() => getFontSize('xSmall')}
	font-weight: 700;
`;
export const H6 = styled.h6`
	${() => getFontSize('xSmall')} // TODO
	font-weight: 700;
`;
