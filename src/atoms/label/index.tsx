import classnames from 'classnames';

import { ChildrenType, SizeType } from 'types';
import Col from '../col';
import Text from '../text';
import { Wrapper } from './index.styles';

type Props = {
	size?: SizeType;
	children: ChildrenType;
	type?: string;
	isValue?: boolean | undefined;
	className?: string;
};

export function Label({ size, children, type, isValue, className }: Props) {
	const classNames = classnames({
		label: true,
		[`${size}`]: size,
		[`${type}`]: type,
		[`${className}`]: className,
	});
	return (
		<Wrapper className={classNames} htmlFor={type} isValue={isValue}>
			<Col space={5}>
				{type && (
					<Text className="label-text" size={size}>
						<strong>{type}</strong>
					</Text>
				)}
				{children}
			</Col>
		</Wrapper>
	);
}

export default Label;
