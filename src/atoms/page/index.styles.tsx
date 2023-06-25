import styled from 'styled-components';

import { PageType } from 'types';

export const Wrapper = styled.div<{ type?: PageType }>`
	&:has(.header.fixed) {
		padding-top: 52.8px;
	}
	min-height: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--primaryBg);
`;
