import styled from 'styled-components';

export const Wrapper = styled.div`
	border-radius: 4px;
	padding: 5px 20px 5px 10px;
	display: flex;
	align-items: center;
	overflow: hidden;
	background-color: var(--white);
	border: 1px solid var(--border);
	gap: 5px;
	&:focus-within {
		border-color: var(--neutral200);
	}
	input {
		padding: 5px;
		margin-right: 5px;
	}
	position: relative;
`;

export const Clear = styled.div`
	cursor: pointer;
	position: absolute;
	right: 5px;
	padding: 5px;
	@media (hover: hover) {
		&:hover {
			color: var(--neutral400);
		}
	}
`;
