import { BooleanType } from 'types/index';
import styled, { css } from 'styled-components';
import { getSkelton } from 'helpers/index';

type Props = {
	selected?: boolean;
};

export const Wrapper = styled.div<Props>`
	display: flex;
	color: var(--neutral300);
	background-color: var(--white);
	border-radius: 4px;
	box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.2);
	.col {
		padding: 20px 10px;
	}
	.text {
		margin: 0;
		&.caption {
			color: var(--neutral200);
		}
	}
	${({ selected }) =>
		selected &&
		css`
			color: var(--primary);
			font-weight: 600;
		`}
	.col > div {
		&:before {
			content: none;
		}
	}
	&.loading {
		pointer-events: none;
		.col > div {
			${() => getSkelton()}
		}
	}
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
