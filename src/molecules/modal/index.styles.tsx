import styled, { css } from 'styled-components';

import { MobileSize } from 'utils/constants';
import { getModalStyle } from 'helpers';
import { ModalVariantType, SizeType } from 'types';

type Props = {
	size?: SizeType;
	variant: ModalVariantType;
};

export const Wrapper = styled.div<Props>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--overlay);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
	overflow: hidden;
	> div {
		width: 100%;
		${({ variant }) => getModalStyle(variant)}
	}
`;
