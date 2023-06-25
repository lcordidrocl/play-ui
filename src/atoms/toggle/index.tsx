import { ChildrenType } from 'types';

import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	onClick?: () => void;
};

export function Toggle({ children, onClick }: Props) {
	return (
		<Wrapper className="toggle" onClick={() => onClick && onClick()}>
			{children}
		</Wrapper>
	);
}

export default Toggle;
