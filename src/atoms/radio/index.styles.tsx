import styled, { css } from 'styled-components';

export const InputField = styled.input`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	opacity: 0;
	margin: 0;
`;

type Prop = {
	checked: boolean;
};

export const Wrapper = styled.div<Prop>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	div {
		border: 2.5px solid var(--border);
		border-radius: 50%;
		padding: 5px;
		position: relative;
		&:after {
			content: '';
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: transparent;
			display: block;
		}
	}
	p {
		margin: 0;
	}
	${({ checked }) =>
		checked &&
		css`
			div {
				border-color: var(--primary);
				&:after {
					background-color: var(--primary);
				}
			}
		`};
`;
