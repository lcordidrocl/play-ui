import styled, { css } from 'styled-components';
import { SizeType, VariantType } from 'types';
import { getCheckboxVariant, getRoundSize } from 'helpers';

export const InputField = styled.input`
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	opacity: 0;
	margin: 0;
	cursor: pointer;
`;

type Prop = {
	variant?: VariantType | undefined;
	size?: SizeType;
};

export const Wrapper = styled.div<Prop>`
	display: flex;
	gap: 10px;
	position: relative;
	align-items: center;
	> div {
		${({ size = 'Large' }) => getRoundSize(size)};
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 2.5px;
		border: 2px solid;
		background-color: var(--white);
		border-color: var(--secondary);
		color: var(--white);
	}
	p {
		margin: 0;
	}
	@media (hover: hover) {
		&:hover:not(.checked) {
			> div {
				color: var(--primary);
			}
		}
	}
	&.checked {
		> div {
			background-color: var(--secondary);
			border-color: var(--secondary);
			color: var(--white);
		}
	}

	${({ variant }) => {
		return getCheckboxVariant({ variant });
	}}
`;
