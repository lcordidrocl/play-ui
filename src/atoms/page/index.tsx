import { ChildrenType, PageType } from 'types';

import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	type?: PageType;
};

export function Page({ children, type }: Props) {
	return (
		<Wrapper className="page" type={type}>
			{children}
		</Wrapper>
	);
}

export default Page;
