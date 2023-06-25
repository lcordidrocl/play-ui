import styled from 'styled-components';
import { getFontSize } from 'helpers';

import { SizeType } from 'types';

type Props = {
	size: SizeType | undefined;
};

export const Paragraph = styled.p<Props>`
	${({ size }) => {
		return getFontSize(size);
	}}
`;
