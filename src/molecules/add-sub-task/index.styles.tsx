import styled, { css } from 'styled-components';

import { BooleanType } from 'types/index';
import { getSkelton } from 'helpers/index';

type Props = {
	selected?: boolean;
	loading?: BooleanType;
};

export const Wrapper = styled.form<Props>`
	display: flex;
	gap: 20px;
	box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.2);
	padding: 20px 10px;
	background-color: var(--white);
	color: var(--neutral300);
	border-radius: 4px;
	.text {
		margin: 0;
		cursor: pointer;
	}
	&:focus-within {
		.lshaped {
			color: var(--primary);
		}
	}
	.col {
		&:before {
			content: none;
		}
	}
	${({ loading }) =>
		loading === 'true' &&
		css`
			.col {
				${() => getSkelton()}
			}
		`}
`;

export const Clear = styled.div`
	cursor: pointer;
	padding: 5px;
	@media (hover: hover) {
		&:hover {
			svg {
				color: var(--neutral400);
			}
		}
	}
`;
