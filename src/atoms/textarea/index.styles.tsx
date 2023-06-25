import styled from 'styled-components';

export const InputField = styled.textarea`
	padding: 0;
	border: 0;
	outline: 0;
	background-color: transparent;
	width: 100%;
	resize: vertical;
	border: 1px solid transparent;
	padding: 10px;
	border-radius: 4px;
	&::placeholder,
	&::-webkit-input-placeholder {
		color: var(--neutral200);
	}
	&:-ms-input-placeholder {
		color: var(--neutral200);
	}
	&:focus-within {
		border-color: var(--primary);
	}
`;
