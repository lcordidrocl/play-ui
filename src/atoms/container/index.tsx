import { ChildrenType } from 'types';

import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
};

export function Container({ children }: Props) {
	return <Wrapper className="container">{children}</Wrapper>;
}

export default Container;
