import { FlexAlignType } from 'types';
import styled from 'styled-components';

type RowProps = {
	align?: FlexAlignType;
	space?: number;
	justify?: FlexAlignType;
};

export const Wrapper = styled.div<RowProps>`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: ${(props) => (props.justify ? props.justify : 'left')};
	align-items: ${(props) => (props.align ? props.align : 'left')};
	gap: ${(props) => (props.space ? `${props.space}px` : '20px')};
	flex-wrap: wrap;
`;
