import { getPriorityColor, getPriorityIcon } from 'helpers';
import { StatusType } from 'types';
import Icon from '../icon';
import { Wrapper } from './index.styles';

type Props = {
	value: number;
	status: StatusType;
};

export function Priority({ value, status }: Props) {
	const color = getPriorityColor({ value, status });
	const icon = getPriorityIcon({ value, status });
	return (
		<Wrapper className="priority">
			<Icon color={color} as={icon} size="Small" /> {value}
		</Wrapper>
	);
}

export default Priority;
