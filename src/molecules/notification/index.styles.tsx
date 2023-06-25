import { ColorType } from 'types';
import styled, { css } from 'styled-components';

const getTheme = (type: ColorType) => {
	switch (type) {
		case 'error':
			return css`
				background-color: var(--error);
				border-color: var(--error);
				color: var(--white);
			`;
		case 'success':
			return css`
				background-color: var(--success);
				border-color: var(--success);
				color: var(--white);
			`;
		case 'warning':
			return css`
				background-color: var(--warning);
				border-color: var(--warning);
				color: var(--white);
			`;
		case 'secondary':
		default:
			return css`
				background-color: var(--secondary);
				border-color: var(--secondary);
				color: var(--white);
			`;
	}
};

type Props = {
	themeType: ColorType;
};

export const Wrapper = styled.div<Props>`
	position: fixed;
	z-index: 9;
	top: 20px;
	margin: 0 auto;
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-radius: 8px;
	gap: 14px;
	${({ themeType }) => getTheme(themeType)}
	padding: 20px;
	text-align: center;
	border: 1px solid;
	position: relative;

	p {
		margin: 0;
	}
`;
