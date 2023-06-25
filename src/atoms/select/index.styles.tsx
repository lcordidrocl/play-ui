import styled from 'styled-components';

type SelectProps = {
	selected: boolean;
};

export const SelectElement = styled.select<SelectProps>`
	width: 100%;
	background-color: transparent;
	border: none;
	outline: none;
	appearance: none;
	z-index: 2;
	line-height: 18.9px;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 0.3px;
	color: ${({ selected }) => (selected ? 'var(--primary)' : 'var(--grey)')};
`;
