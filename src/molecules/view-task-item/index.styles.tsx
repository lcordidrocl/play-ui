import { getSkelton } from 'helpers';
import { MobileSize } from 'utils/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	background: var(--neutral50);
	padding: 20px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	> .heading {
		margin: 0;
	}
	@media screen and (max-width: ${MobileSize}) {
		padding: 15px;
	}
	.search-input,
	li div {
		&:before {
			content: none;
		}
	}
	&.loading {
		.search-input,
		li div {
			${() => getSkelton()}
		}
	}
`;
