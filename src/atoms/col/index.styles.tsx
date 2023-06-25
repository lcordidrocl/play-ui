import styled from 'styled-components';

import { ColType } from 'types';

export const Wrapper = styled.div<ColType>`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: ${({ size }) => size || 'initial'};
	align-items: ${({ align }) => (align ? align : 'left')};
	justify-content: ${({ justify }) => (justify ? justify : 'center')};
	gap: ${({ space }) => (space ? space + 'px' : 0)};
	&.onClick {
		cursor: pointer;
	}
`;
