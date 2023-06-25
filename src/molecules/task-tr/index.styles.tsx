import styled, { css } from 'styled-components';

type TRProps = {
	selected?: boolean;
};

export const TR = styled.tr<TRProps>`
	td {
		&:first-of-type {
			border-left: 2px solid transparent;
			border-top-left-radius: 4px;
			border-bottom-left-radius: 4px;
		}
		&:last-of-type {
			border-right: 2px solid transparent;
			border-top-right-radius: 4px;
			border-bottom-right-radius: 4px;
		}
	}
	${({ selected }) =>
		selected &&
		css`
			td {
				&,
				&:first-child,
				&:last-child {
					border-color: var(--primary);
				}
			}
		`}
`;

export const TD = styled.td`
	border-bottom: 2px solid transparent;
	border-top: 2px solid transparent;
	padding: 12.5px 14.5px;
	> .text {
		margin: 0;
	}
	${({ align }) => css`
		text-align: ${align};
	`}
`;
