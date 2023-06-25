import React from 'react';

import styled from 'styled-components';
import { ColorType, SizeType, VariantType } from 'types';

import { getTheme, getVariant } from 'helpers';

type WrapperProps = {
	size?: SizeType;
	themeType?: ColorType;
	variant?: VariantType;
};

export const Wrapper = styled.button<WrapperProps>`
	cursor: pointer;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	flex-direction: row;
	width: fit-content;
	gap: 10px;
	border-style: solid;
	transition: all 0.05s ease;
	.text {
		margin: 0;
	}
	&:disabled {
		background-color: var(--neutral300);
		border-color: var(--neutral300);
		color: var(--white);
		cursor: not-allowed;
		svg {
			fill: var(--white);
		}
	}
	&.active {
		pointer-events: none;
	}
	@media (hover: hover) {
		&:not(:disabled):hover {
			box-shadow: rgb(0 0 0 / 10%) 0px 83px 0px inset,
				rgb(0 0 0 / 6%) 0px 0px 0px inset;
		}
	}
	&:not(:disabled):active {
		box-shadow: inset 0px 100px 0 rgb(0 0 0 / 20%),
			inset 0px 4px 8px rgb(0 0 0 / 30%);
	}
	${({ variant = 'primary', themeType }) => {
		return getTheme({ variant, theme: themeType });
	}}
	${({ variant = 'primary', size }) => {
		return getVariant({ variant, size });
	}}
`;
