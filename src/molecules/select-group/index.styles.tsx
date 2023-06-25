import styled from 'styled-components';

import { getColor } from 'helpers/index';

type Props = {
	isValue: boolean;
};

export const Wrapper = styled.div<Props>`
	border-bottom: 2px solid;
	border-color: var(--border);
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	&:focus-within {
		border-color: var(--secondary);
	}
	select {
		padding: 12px 0 12px 12px;
	}
	.icon-wrapper {
		position: absolute;
		right: 5px;
		z-index: 1;

		svg {
			fill: ${({ isValue }) =>
				isValue ? getColor('primary') : getColor('border')};
		}
	}
`;
