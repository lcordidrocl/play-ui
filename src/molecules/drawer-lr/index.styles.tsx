import { getSkelton } from 'helpers';
import { MobileSize } from 'utils/constants';
import styled from 'styled-components';

type Props = {
	selected?: boolean;
};

export const Wrapper = styled.div<Props>`
	display: flex;
	gap: 15px;
	align-items: center;
	cursor: pointer;
	color: var(--primary);
	padding: 15px 20px;
	.text {
		margin: 0;
	}
	.col {
		&:before {
			content: none;
		}
	}
	&.loading {
		.col {
			${() => getSkelton()}
		}
	}
	@media (hover: hover) {
		&:hover {
			box-shadow: rgb(0 0 0 / 10%) 0px 83px 0px inset,
				rgb(0 0 0 / 6%) 0px 0px 0px inset;
		}
	}
	&:active {
		box-shadow: inset 0px 100px 0 rgb(0 0 0 / 20%),
			inset 0px 4px 8px rgb(0 0 0 / 30%);
	}
	@media screen and (max-width: ${MobileSize}) {
		padding: 10px 15px;
	}
`;
