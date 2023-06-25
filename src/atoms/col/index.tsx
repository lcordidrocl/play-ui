import classNames from 'classnames';
import { ChildrenType, ColType } from 'types';
import { Wrapper } from './index.styles';

interface Props extends ColType {
	children: ChildrenType;
}

export function Col({ children, align, justify, size, space, onClick }: Props) {
	const classname = classNames({ col: true, onClick: onClick });
	return (
		<Wrapper
			className={classname}
			align={align}
			justify={justify}
			size={size}
			space={space}
			onClick={onClick}
		>
			{children}
		</Wrapper>
	);
}

export default Col;
