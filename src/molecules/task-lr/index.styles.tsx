import styled from 'styled-components';

import { getSkelton } from 'helpers/index';
import { BooleanType } from 'types/index';

type Props = {
	loading?: BooleanType;
};

export const Wrapper = styled.div<Props>`
	> div {
		display: flex;
		width: 100%;
	}
	background-color: var(--white);
	border-radius: 4px;
	cursor: pointer;
	box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.2);
	color: var(--primary);
	.text {
		margin: 0;
		cursor: pointer;
		flex-grow: 1;
		padding: 20px;
	}
	&.selected {
		background-color: var(--neutral100);
	}
	&.completed {
		text-decoration: line-through;
		color: var(--neutral300);
	}
	@media (hover: hover) {
		&:not(.selected):not(.loading) {
			&:hover {
				background-color: var(--neutral50);
			}
		}
	}
	.checkbox {
		padding: 20px 0 20px 20px;
	}
	.important {
		padding: 20px 20px 20px 0;
	}

	> div {
		&:before {
			content: none;
		}
	}

	&.loading {
		> div {
			${getSkelton}
		}
	}
`;
