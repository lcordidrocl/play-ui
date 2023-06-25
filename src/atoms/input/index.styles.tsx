import styled from 'styled-components';

export const InputField = styled.input`
	padding: 0;
	border: 0;
	outline: 0;
	background-color: transparent;
	width: 100%;
	&::placeholder,
	&::-webkit-input-placeholder {
		color: var(--neutral200);
	}
	&:-ms-input-placeholder {
		color: var(--neutral200);
	}
`;
