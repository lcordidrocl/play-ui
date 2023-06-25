import { ChildrenType, FlexAlignType } from 'types';
import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	align?: FlexAlignType;
	space?: number;
	justify?: FlexAlignType;
};

export function Row({ children, align, space, justify }: Props) {
	return (
		<Wrapper className="row" align={align} space={space} justify={justify}>
			{children}
		</Wrapper>
	);
}

export default Row;
