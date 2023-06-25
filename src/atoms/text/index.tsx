import classnames from 'classnames';

import { ChildrenType, OnClickType, SizeType } from 'types';
import { Paragraph } from './index.styles';

type Props = {
	size?: SizeType;
	children: ChildrenType;
	className?: string;
	onClick?: OnClickType;
};

export function Text({ size, children, className, onClick }: Props) {
	const classNames = classnames({
		text: true,
		[`${size}`]: size,
		[`${className}`]: className,
	});
	return (
		<Paragraph
			className={classNames}
			size={size}
			onClick={() => onClick && onClick()}
		>
			{children}
		</Paragraph>
	);
}

export default Text;
