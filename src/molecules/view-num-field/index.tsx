import classnames from 'classnames';

import { Text } from 'atoms';
import { Wrapper } from './index.styles';

type Props = {
	value: string;
	selected?: boolean | undefined;
	className?: string;
	onClick: () => void;
};

export function ViewNumField({ value, selected, className, onClick }: Props) {
	const classNames = classnames({
		'view-num-field': true,
		[`${className}`]: className,
	});
	return (
		<Wrapper className={classNames} selected={selected} onClick={() => onClick()}>
			<Text>{value}</Text>
		</Wrapper>
	);
}

export default ViewNumField;
