import { ChildrenType, FlexAlignType } from 'types';
import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	align?: FlexAlignType;
	space?: number;
	cols?: string;
};

export function Grid({ children, align, space, cols }: Props) {
	return (
		<Wrapper className="grid" align={align} space={space} cols={cols}>
			{children}
		</Wrapper>
	);
}

export default Grid;
