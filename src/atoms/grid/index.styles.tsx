import { FlexAlignType } from 'types';
import styled from 'styled-components';

type RowProps = {
	align?: FlexAlignType;
	space?: number;
	cols?: string;
};

export const Wrapper = styled.div<RowProps>`
	display: grid;
	grid-template-columns: ${(props) => (props.cols ? props.cols : 'auto')};
	width: 100%;
	justify-content: ${(props) => (props.align ? props.align : 'left')};
	align-items: center;
	gap: ${(props) => (props.space ? `${props.space}px` : '20px')};
`;
