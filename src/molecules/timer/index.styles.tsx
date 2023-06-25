import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 20px;
	flex: 1;
	border: 1px solid transparent;
	background-color: var(--white);
	color: var(--neutral200);

	> div {
		display: flex;
		&:last-of-type {
			flex: 1;
			justify-content: flex-end;
		}
	}
`;

export const SelectWrapper = styled.div<{ selected: boolean }>`
	width: 50px;
	position: relative;
	display: flex;
	align-items: center;

	${({ selected }) => css`
		select {
			color: ${selected ? 'var(--primary)' : 'var(--neutral200)'};
		}
	`}

	> span {
		position: absolute;
		right: 0;
		z-index: 1;
		width: 25px;
	}
`;
