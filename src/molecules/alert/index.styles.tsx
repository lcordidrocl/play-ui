import { ThemeType } from 'types';
import styled, { css } from 'styled-components';

const getTheme = (type: ThemeType) => {
	switch (type) {
		case 'error':
			return css`
				background-color: var(--red50);
				color: var(--red);
			`;
		case 'warning':
		default:
			return css`
				background-color: var(--blue50);
				color: var(--white);
			`;
	}
};

type Props = {
	themeType: ThemeType;
};

export const Wrapper = styled.div<Props>`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	border-radius: 4px;
	gap: 15px;
	align-items: center;
	padding: 15px;
	.heading,
	.text {
		margin: 0;
	}
	.button {
		width: 100%;
	}
	${({ themeType }) => getTheme(themeType)}
`;
