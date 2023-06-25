import styled, { css } from 'styled-components';

type Props = {
	isValue: boolean;
	isError: boolean;
};

export const Wrapper = styled.div<Props>`
	display: flex;
	border: 1px solid var(--border);
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 4px;
	z-index: 1;
	padding: 16px;
	gap: 5px;
	&:focus-within {
		border-color: var(--primary);
	}
	${({ isError }) =>
		isError &&
		css`
			border-width: 2px;
			border-color: var(--error);
		`}
`;
