import classnames from 'classnames';

import { Wrapper } from './index.styles';
import { StatusType, TabType } from 'types';
import Text from 'atoms/text';

type TabProps = {
	active: StatusType;
	title: string;
	status: StatusType;
	onClick: () => void;
	count?: number;
};

const Tab = ({ active, title, status, onClick, count }: TabProps) => {
	const isActive = active === status;
	return (
		<li className={classnames({ active: isActive })} onClick={() => onClick()}>
			<Text>{title}</Text> <span>({count || 0})</span>
		</li>
	);
};

type Props = {
	active: StatusType;
	setActive: (id: StatusType) => void;
	data: TabType[];
};
export const Tabs = ({ active, setActive, data }: Props) => {
	return (
		<Wrapper className="tabs unset">
			{data.map((item) => (
				<Tab
					key={item.id}
					status={item.status as StatusType}
					title={item.title}
					onClick={() => setActive(item.status as StatusType)}
					active={active}
					count={item.count}
				/>
			))}
		</Wrapper>
	);
};

export default Tabs;
