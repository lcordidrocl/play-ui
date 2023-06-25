import styled, { css } from 'styled-components';

type Props = {
	height?: number;
	othersHeight?: number;
};
export const Wrapper = styled.div<Props>`
	display: flex;
	flex-direction: column;

	.inner {
		display: flex;
		flex-direction: column;
		position: relative;
		${({ height, othersHeight = 0 }) => css`
			height: calc(${height ? height + 'px' : '100vh'} - ${othersHeight}px);
		`};
		overflow: auto;
		::-webkit-scrollbar {
			width: 3px;
		}
	}
`;
