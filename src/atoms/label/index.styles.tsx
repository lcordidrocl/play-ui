import styled, { css } from 'styled-components';

type Props = {
	isValue: boolean | undefined;
};

export const Wrapper = styled.label<Props>`
	.label-text {
		text-transform: capitalize;
		margin-bottom: 3px;
		margin-top: 0;
	}
`;
