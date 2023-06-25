import { getSkelton } from 'helpers/index';
import styled, { css } from 'styled-components';

import { BooleanType } from 'types/index';

type Props = {
	isChecked?: boolean;
	loading?: BooleanType;
};

export const Wrapper = styled.form<Props>`
	margin-left: 25px;
	padding: 15px;
	background-color: var(--white);
	border-radius: 4px;
	.text {
		margin: 0;
	}
	${({ isChecked }) =>
		isChecked &&
		css`
			input[type='text'] {
				text-decoration: line-through;
				color: var(--border);
				pointer-events: none;
			}
			.icon.bin {
				color: var(--white);
				pointer-events: none;
			}
		`}
	.row {
		&:before {
			content: none;
		}
	}
	${({ loading }) =>
		loading === 'true' &&
		css`
			.row {
				${() => getSkelton()}
			}
		`}
`;

export const Delete = styled.div`
	cursor: pointer;
	padding: 5px;
	color: var(--border);
	@media (hover: hover) {
		&:hover {
			color: var(--red);
		}
	}
`;
