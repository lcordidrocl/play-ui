import styled, { css } from 'styled-components';

import { getFontSize } from 'helpers';

import { SizeType, ThemeType, VariantType } from 'types';

type Props = {
	size: SizeType | undefined;
	themeType?: ThemeType;
	variant: VariantType | undefined;
};

export const Wrapper = styled.a<Props>`
	${({ size }) => {
		return getFontSize(size);
	}}
	${({ variant }) => {
		switch (variant) {
			case 'secondary':
				return css`
					text-decoration: none;
					@media (hover: hover) {
						&:hover {
							text-decoration: none;
						}
					}
					&:active {
						text-decoration: none;
					}
				`;
			case 'underline':
				return css`
					text-decoration: underline;
					@media (hover: hover) {
						&:hover {
							text-decoration: none;
						}
					}
					&:active {
						text-decoration: underline;
					}
				`;
			default:
				return css`
					text-decoration: none;
					@media (hover: hover) {
						&:hover {
							text-decoration: underline;
						}
					}
					&:active {
						text-decoration: none;
					}
				`;
		}
	}}
  ${({ themeType }) => {
		switch (themeType) {
			case 'secondary':
				return css`
					color: var(--secondary);
				`;
			case 'primary':
				return css`
					color: var(--blue200);
				`;
			default:
				return css``;
		}
	}}
`;
