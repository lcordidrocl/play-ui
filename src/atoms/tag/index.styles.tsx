import styled, { css } from 'styled-components';

type Props = {
	selected?: boolean;
};

export const Wrapper = styled.div<Props>`
	display: inline-flex;
	.text {
		margin: 0;
	}
	> div {
		display: flex;
		gap: 8px;
		border: 1px solid;
		background-color: var(--white);
		padding: 8px;
		text-align: center;
		border-radius: 4px;
		text-transform: uppercase;
	}
	${({ selected }) =>
		selected &&
		css`
			> div {
				color: var(--blue300);
				border-color: var(--blue300);
				background-color: var(--blue50);
			}
		`}
`;
