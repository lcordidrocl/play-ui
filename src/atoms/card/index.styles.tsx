import styled, { css } from 'styled-components';
import { BooleanType } from 'types';
import { MobileSize } from 'utils';
import { getSkelton } from 'helpers';

export const Wrapper = styled.div<{ space?: number; loading?: BooleanType }>`
	background-color: var(--white);
	border-radius: 4px;
	padding: 25px;
	gap: ${({ space }) => (space ? space + 'px' : '20px')};
	display: flex;
	flex-direction: column;
	@media screen and (max-width: ${MobileSize}) {
		padding: 15px;
	}
	.row,
	.col {
		&:before {
			content: none;
		}
	}
	${({ loading }) =>
		loading === 'true' &&
		css`
			.row,
			.col {
				${() => getSkelton()}
			}
		`}
`;
