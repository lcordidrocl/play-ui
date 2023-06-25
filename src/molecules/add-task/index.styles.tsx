import { MobileSize } from 'utils';
import styled from 'styled-components';

export const Wrapper = styled.form`
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	width: 100%;
	z-index: 2;
	padding: 10px;
	background-color: var(--neutral75);
	margin-top: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		border-radius: 4px;
		background-color: var(--white);
		padding: 0 0 0 10px;
	}
	@media screen and (max-width: ${MobileSize}) {
		&,
		& > div {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
	}
	&:focus-within {
		input {
			&::placeholder,
			&::-webkit-input-placeholder {
				color: var(--neutral200);
			}
			&:-ms-input-placeholder {
				color: var(--neutral200);
			}
		}
	}
	input {
		padding: 10px 0;
		color: var(--primary);
		&::placeholder,
		&::-webkit-input-placeholder {
			color: var(--primary);
		}
		&:-ms-input-placeholder {
			color: var(--primary);
		}
	}
`;

export const Clear = styled.div`
	cursor: pointer;
	padding: 15px;
`;
