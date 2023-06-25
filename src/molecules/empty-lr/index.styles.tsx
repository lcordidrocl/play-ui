import styled from 'styled-components';

import { BooleanType } from 'types/index';

type Props = {
	selected?: boolean;
	loading?: BooleanType;
};

export const Wrapper = styled.div<Props>`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin: 50px 0;
`;
