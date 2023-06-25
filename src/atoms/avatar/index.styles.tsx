import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
	width: 35px;
	height: 35px;
	background-color: var(--white);
	color: var(--primary);
	.text {
		margin: 0;
	}
	${({ onClick }) =>
		onClick &&
		css`
			cursor: pointer;
		`}
`;
